import { AccountTypeEnum } from 'src/application/enum/AccountTypeEnum';

export class CreateAccountDto {
  name: string;
  description: string;
  balance: number;
  type: AccountTypeEnum;
}
