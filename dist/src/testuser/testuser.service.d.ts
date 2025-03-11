import { Testuser } from './testuser.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTestUserInput } from './create-testuser.input';
export declare class TestuserService {
    private prisma;
    private testUsers;
    constructor(prisma: PrismaService);
    createUser(data: {
        name: string;
        email: string;
    }): Promise<{
        id: number;
        email: string;
        name: string | null;
    }>;
    getUsers(): Promise<{
        id: number;
        email: string;
        name: string | null;
    }[]>;
    findAll(): Testuser[];
    findOne(id: number): Testuser;
    create(createTestUserInput: CreateTestUserInput): Testuser;
}
