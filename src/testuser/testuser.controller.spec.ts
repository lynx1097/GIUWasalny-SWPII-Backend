import { Test, TestingModule } from '@nestjs/testing';
import { TestuserController } from './testuser.controller';

describe('TestuserController', () => {
  let controller: TestuserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestuserController],
    }).compile();

    controller = module.get<TestuserController>(TestuserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
