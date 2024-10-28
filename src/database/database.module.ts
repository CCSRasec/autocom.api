import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'postgres', // as assumed
        url: `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@postgres:5432/${process.env.POSTGRES_DB}`,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: config.get('NODE_ENV') !== 'production', // careful with this in production
      }),
      inject: [ConfigService],
    })
  ],
  exports: [TypeOrmModule]
})
export class DatabaseModule {}