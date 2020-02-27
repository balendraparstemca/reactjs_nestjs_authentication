import { Injectable } from '@nestjs/common';
import {Repository} from 'typeorm';
import {InjectRepository } from '@nestjs/typeorm';
import {User} from './user.entity';


@Injectable()
export class UsersService {
    constructor( @InjectRepository(User)
    private userRepository:Repository<User>,){}

    async findUser(email:string,password:string): Promise<User>{

        return await this.userRepository.findOne({
            where:{
                email:email,
                password:password
            }
        });

    }
	
	  async findEmail(email:string): Promise<User>{

        return await this.userRepository.findOne({
            where:{
                email:email
                
            }
        });

    }

    async creteUser(user:User): Promise<User>{
        return await this.userRepository.save(user);
       
    }
}
