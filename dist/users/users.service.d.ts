import { PrismaService } from '../prisma.service';
import { User, Prisma } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.UserCreateInput): Promise<User>;
    findAll(): Promise<User[] | null>;
    findOne(id: Prisma.UserWhereUniqueInput): Promise<User | null>;
    update(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
    }): Promise<User>;
    remove(where: Prisma.UserWhereUniqueInput): Promise<User>;
}
