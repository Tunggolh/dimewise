import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { AccountTypeEnum } from 'src/application/enum/AccountTypeEnum';

export class CreateAccountDto {
  @IsString()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly description: string;

  @IsNumber()
  readonly balance: number;

  @IsEnum(AccountTypeEnum)
  readonly type: AccountTypeEnum;
}
