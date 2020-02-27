import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {User} from './user.entity';
import {JwtModule} from '@nestjs/jwt';
import {TypeOrmModule} from '@nestjs/typeorm'
import { AuthService } from './auth.service';

@Module({
  imports:[TypeOrmModule.forFeature([User]),
  JwtModule.register({
  secretOrPrivateKey:'mysecret1234567'
  })
],
  providers: [UsersService,AuthService],
  controllers: [UsersController]
})
export class UsersModule {}
