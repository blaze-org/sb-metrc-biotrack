import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // const config = new DocumentBuilder()
  //   .setTitle('Metrc Sandbox?')
  //   .setDescription('A Metrc Sandbox???')
  //   .setVersion('0.01')
  //   .addTag('Metrc')
  //   .addTag('Items')
  //   .build();

  // const options: SwaggerDocumentOptions = {
  //   deepScanRoutes: true
  // }
  // const document = SwaggerModule.createDocument(app, config, options);
  // SwaggerModule.setup('api', app, document);
  
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
