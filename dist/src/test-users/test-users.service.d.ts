import { TestUser } from './test-users.entity';
import { CreateTestUserInput } from './create-test-user.input';
export declare class TestUsersService {
    private testUsers;
    findAll(): TestUser[];
    findOne(id: number): TestUser;
    create(createTestUserInput: CreateTestUserInput): TestUser;
}
