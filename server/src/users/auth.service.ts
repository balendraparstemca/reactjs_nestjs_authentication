import {Injectable} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {UsersService} from './users.service';
import {User} from './user.entity';
@Injectable()
export class AuthService{
    constructor(
        private readonly userService:UsersService,
        private readonly jwtSevice:JwtService
    ){}

    private async validation(userdata:User):Promise<User>{
        return await this.userService.findUser(userdata.email,userdata.password);
    }
	
	private async checkavailable(userdata:User):Promise<User>{
        return await this.userService.findEmail(userdata.email);
    }

    public async login(user:User):Promise<any | {status:number}>
    {
        return this.validation(user).then((userdata)=>
        {
            if(!userdata)
            {
                return {status:404, login:'login failed user is not registered'}
            }

            let payload = `${userdata.name}`;
         
            const accessToken = this.jwtSevice.sign(payload);
            return{
                status:200,
                login:"login successfull",
                token:accessToken
            };
        });
    }

    public async register(user:User):Promise<any>{
        

        return this.checkavailable(user).then((userdata)=>
        {
            if(!userdata)
            {

               this.userService.creteUser(user);
               return {status:200,message:'registered succefull'};
               
            }

            return {status:404,message:'user already registered'}
           
        });
    }
		
		
		
    
}