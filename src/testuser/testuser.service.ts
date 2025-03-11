import { Injectable } from '@nestjs/common';
import { Testuser } from './testuser.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTestUserInput } from './create-testuser.input';

@Injectable()
export class TestuserService {
  private testUsers: Testuser[] = [];  
  constructor(private prisma: PrismaService) {}

    async createUser(data: { name: string; email: string }) {
      return this.prisma.testUser.create({ data });
    }
  
    async getUsers() {
      return this.prisma.testUser.findMany();
    }
    

    findAll(): Testuser[] {
      return this.testUsers;
    }

    findOne(id: number): Testuser {
      const foundUser = this.testUsers.find((testUser) => testUser.id === id);
      if (!foundUser) {
        throw new Error(`Testuser with id ${id} not found`);
      }
      return foundUser;
    }

    create(createTestUserInput: CreateTestUserInput): Testuser {
      const testUser = { id: this.testUsers.length + 1, ...createTestUserInput };
      this.testUsers.push(testUser);
      return testUser;
    }

}
