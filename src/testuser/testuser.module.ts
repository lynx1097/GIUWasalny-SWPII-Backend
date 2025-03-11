import { Module } from '@nestjs/common';
import { TestuserService } from './testuser.service';
import { TestuserController } from './testuser.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { TestUsersResolver } from './testuser.resolver';

@Module({
  providers: [TestuserService  ,  PrismaService, TestUsersResolver],
  controllers: [TestuserController],
  exports: [TestuserService],
})
export class TestuserModule {}
