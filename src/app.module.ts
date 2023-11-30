import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from 'db/typeorm.module';
import { AuthModule } from './auth/auth.module';
import { TokenModule } from './token/token.module';

@Module({
  
  imports: [UsersModule,
    TypeOrmModule,
    AuthModule,
    TokenModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
