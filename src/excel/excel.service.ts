import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Workbook } from "exceljs";
import * as tmp from 'tmp';
import { writeFile } from "fs/promises";

export class ExcelService{

    async downloadExcel(data) {
        if(!data){
            throw new NotFoundException("Data empty")
        }
        let rows = []

        let book = new Workbook();
        let sheet = book.addWorksheet('sheet1');
        let rowsToShow = [];
        let indexArray = [];
        let rowsData = [];
        let index = 0;
        let typeIndex = 0;
        Object.keys(data[0]).forEach(itemRow => {
            if(itemRow == 'Tag' || itemRow == 'Status'){
                rowsToShow.push(itemRow);
            } else if(itemRow == 'MetricType'){
                rowsToShow.push('Type');
            }
        })
        data.forEach(doc => {
            if(doc){
                Object.keys(doc).forEach(itemRow => {
                    if(itemRow == 'Tag' || itemRow == 'Status'){
                        indexArray.push(index);
                    } else if(itemRow == 'MetricType'){
                        indexArray.push(index);
                        typeIndex = index;
                    }
                    index++;
                })
                indexArray.forEach(index => {
                    if(index == typeIndex && Object.values(doc)[index] && Object.values(doc)[index]['Name']){
                        if(typeof(Object.values(doc)[index]['Name']) == 'string'){
                            rowsData.push(Object.values(doc)[index]['Name']);
                        }
                    } else {
                        rowsData.push(Object.values(doc)[index]);
                    }
                })
                rows.push(rowsData);
                rowsData = [];
                indexArray = [];
                index = 0;


            }
            
        })
        rows.unshift(rowsToShow);
        sheet.addRows(rows);

        let File = await new Promise((resolve,reject) => {
            tmp.file({discardDescriptor: false, prefix: 'MetrcTags', postfix: '.csv', mode: parseInt('0600', 8)}, async(err,file) => {
                if(err){
                    throw new BadRequestException(err)
                }
                book.csv.writeFile(file).then(_ => {
                    resolve(file)
                }).catch(err => {
                    throw new BadRequestException(err)
                })
            })
        })
        return File;
    }
}