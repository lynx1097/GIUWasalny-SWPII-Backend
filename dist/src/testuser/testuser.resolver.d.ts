import { TestuserService } from './testuser.service';
import { Testuser } from './/testuser.entity';
import { CreateTestUserInput } from './create-testuser.input';
export declare class TestUsersResolver {
    private readonly testUsersService;
    constructor(testUsersService: TestuserService);
    getTestUsers(): Promise<Testuser[]>;
    getTestUser(id: number): Promise<Testuser>;
    createTestUser(createTestUserInput: CreateTestUserInput): Promise<Testuser>;
}
