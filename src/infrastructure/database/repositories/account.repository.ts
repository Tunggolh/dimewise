import { BaseRepository } from './base.abstract.repository';
import { AccountInterfaceRepository } from 'src/domain/interfaces/account.interface.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from '../entities/account.entity';

export class AccountRepository
  extends BaseRepository<Account>
  implements AccountInterfaceRepository
{
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
  ) {
    super(accountRepository);
  }
}
