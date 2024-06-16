import { Injectable } from '@nestjs/common';
import { AccountInterfaceRepository } from 'src/domain/interfaces/account.interface.repository';
import { Account } from 'src/infrastructure/database/entities/account.entity';
import { CreateAccountDto } from 'src/infrastructure/http/dto/accounts/create-account.dto';

@Injectable()
export class AccountService {
  constructor(private readonly accountRepository: AccountInterfaceRepository) {}

  async create(createAccountDto: CreateAccountDto): Promise<Account> {
    return await this.accountRepository.create(createAccountDto);
  }
}
