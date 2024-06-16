import { Module } from '@nestjs/common';
import { AccountsModule } from './accounts.module';
import { TypeOrmConfigModule } from '../config/typeorm/typeorm.module';

@Module({
  imports: [TypeOrmConfigModule, AccountsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
