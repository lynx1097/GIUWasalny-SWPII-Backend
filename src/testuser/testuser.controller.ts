import { Body, Controller, Get, Post } from '@nestjs/common';
import { TestuserService } from './testuser.service';

@Controller('testuser')
export class TestuserController {
    constructor(private userService: TestuserService) {}

  @Post()
  async createUser(@Body() body: { name: string; email: string }) {
    console.log('Data:', body);
    return this.userService.createUser(body);
  }

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }
}
