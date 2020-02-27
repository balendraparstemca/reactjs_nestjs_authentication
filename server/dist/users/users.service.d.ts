import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findUser(email: string, password: string): Promise<User>;
    findEmail(email: string): Promise<User>;
    creteUser(user: User): Promise<User>;
}
