import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from '../config/environment-config/environment-config.module';
import { AccountsModule } from './accounts.module';

@Module({
  imports: [EnvironmentConfigModule, AccountsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
