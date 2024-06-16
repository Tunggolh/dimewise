import { AccountModel } from '../models/account.model';
import { BaseInterfaceRepository } from './base.interface.repository';

export interface AccountInterfaceRepository
  extends BaseInterfaceRepository<AccountModel> {}
