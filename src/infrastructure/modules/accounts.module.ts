import { Module } from '@nestjs/common';
import { AccountController } from '../http/controllers/account.controller';
import { AccountService } from 'src/application/services/account.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from '../database/entities/account.entity';
import { AccountRepository } from '../database/repositories/account.repository';
import { AccountInterfaceRepository } from 'src/domain/interfaces/account.interface.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  controllers: [AccountController],
  providers: [
    AccountService,
    {
      provide: AccountInterfaceRepository,
      useClass: AccountRepository,
    },
  ],
  exports: [AccountService],
})
export class AccountsModule {}
