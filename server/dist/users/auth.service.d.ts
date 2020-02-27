import { JwtService } from '@nestjs/jwt';
import { UsersService } from './users.service';
import { User } from './user.entity';
export declare class AuthService {
    private readonly userService;
    private readonly jwtSevice;
    constructor(userService: UsersService, jwtSevice: JwtService);
    private validation;
    private checkavailable;
    login(user: User): Promise<any | {
        status: number;
    }>;
    register(user: User): Promise<any>;
}
