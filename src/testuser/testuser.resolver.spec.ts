import { Test, TestingModule } from '@nestjs/testing';
import { TestuserResolver } from './testuser.resolver';

describe('TestuserResolver', () => {
  let resolver: TestuserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestuserResolver],
    }).compile();

    resolver = module.get<TestuserResolver>(TestuserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
