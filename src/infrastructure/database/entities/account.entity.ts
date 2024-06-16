import { AccountTypeEnum } from 'src/application/enum/AccountTypeEnum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: AccountTypeEnum })
  type: AccountTypeEnum;

  @Column()
  balance: number;

  @Column()
  description: string;

  // @ManyToOne(() => User, (user) => user.accounts)
}
