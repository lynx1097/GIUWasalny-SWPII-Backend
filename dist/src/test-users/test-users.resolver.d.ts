import { TestUsersService } from './test-users.service';
import { TestUser } from './test-users.entity';
import { CreateTestUserInput } from './create-test-user.input';
export declare class TestUsersResolver {
    private readonly testUsersService;
    constructor(testUsersService: TestUsersService);
    getTestUsers(): Promise<TestUser[]>;
    getTestUser(id: number): Promise<TestUser>;
    createTestUser(createTestUserInput: CreateTestUserInput): Promise<TestUser>;
}
