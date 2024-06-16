import { AccountModel } from '../models/account.model';
import { BaseInterfaceRepository } from './base.interface.repository';

export abstract class AccountInterfaceRepository extends BaseInterfaceRepository<AccountModel> {}
