import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TestuserService } from './testuser.service';
import { Testuser } from './/testuser.entity';
import { CreateTestUserInput } from './create-testuser.input';

@Resolver(() => Testuser)
export class TestUsersResolver {
  constructor(private readonly testUsersService: TestuserService) {}

  @Query(() => [Testuser], { name: 'testUsers' })
  async getTestUsers(): Promise<Testuser[]> {
    return this.testUsersService.findAll();
  }

  @Query(() => Testuser, { name: 'testUser' })
  async getTestUser(@Args('id') id: number): Promise<Testuser> {
    return this.testUsersService.findOne(id);
  }

  @Mutation(() => Testuser)
  async createTestUser(
    @Args('createTestUserInput') createTestUserInput: CreateTestUserInput,
  ): Promise<Testuser> {
    return this.testUsersService.create(createTestUserInput);
  }
}