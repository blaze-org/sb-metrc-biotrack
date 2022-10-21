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
        data.forEach(doc => {
            if(doc)
                rows.push(Object.values(doc))
            
        })

        let book = new Workbook();
        let sheet = book.addWorksheet('sheet1');
        rows.unshift(Object.keys(data[0]));
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