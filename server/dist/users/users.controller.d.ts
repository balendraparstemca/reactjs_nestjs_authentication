import { AuthService } from './auth.service';
import { User } from './user.entity';
export declare class UsersController {
    private readonly authservice;
    constructor(authservice: AuthService);
    login(user: User): Promise<any>;
    register(user: User): Promise<any>;
}
