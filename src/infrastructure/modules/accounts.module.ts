import { Module } from '@nestjs/common';
import { AccountController } from '../http/controllers/account.controller';
import { AccountService } from 'src/application/services/account.service';

@Module({
  imports: [],
  controllers: [AccountController],
  providers: [AccountService],
  exports: [AccountService],
})
export class AccountsModule {}
