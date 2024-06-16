import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from '../config/environment-config/environment-config.module';
import { AppService } from 'src/application/services/app.service';

@Module({
  imports: [EnvironmentConfigModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
