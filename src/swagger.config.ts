import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
    
  const optionsV1 = new DocumentBuilder()
    .setTitle('AutoCom API V1')
    .setDescription('API version 1 endpoints')
    .addBearerAuth()
    .setVersion('1.0')
    .build();
    
  const documentV1 = SwaggerModule.createDocument(app, optionsV1);
  SwaggerModule.setup('api/v1/docs', app, documentV1);

}
