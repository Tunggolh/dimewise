export class AccountModel {
  id: string;
  name: string;
  description: string;
  balance: number;
  // user: User

  private constructor(data: Partial<AccountModel>) {
    Object.assign(this, data);
  }

  static create(data: Partial<AccountModel>): AccountModel {
    return new AccountModel(data);
  }
}
