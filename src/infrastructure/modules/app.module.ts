import { Module } from '@nestjs/common';
import { dataSourceOptions } from '../config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '../http/controllers/app.controller';
import { AppService } from 'src/application/services/app.service';

@Module({
  imports: [TypeOrmModule.forRootAsync(dataSourceOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
