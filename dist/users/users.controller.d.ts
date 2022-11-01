import { UsersService } from './users.service';
import { User } from '@prisma/client';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(userData: {
        name: string;
        email: string;
    }): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, userData: {
        name: string;
        email: string;
    }): Promise<User>;
    remove(id: string): Promise<User>;
}
