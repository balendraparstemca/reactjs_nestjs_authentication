import { Controller, Post, Body } from '@nestjs/common';
import {AuthService} from './auth.service';
import {User } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly authservice:AuthService){}
@Post('/login')

async login(@Body() user:User): Promise<any>{
    console.log(user);
    return this.authservice.login(user);
}

@Post('/register')
async register(@Body() user:User): Promise<any>
{   
    console.log(user);
    return this.authservice.register(user);
}

}
