import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { V1Module } from './api/v1/v1.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    V1Module
  ],
})
export class AppModule {}