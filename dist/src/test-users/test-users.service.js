"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestUsersService = void 0;
const common_1 = require("@nestjs/common");
let TestUsersService = class TestUsersService {
    testUsers = [];
    findAll() {
        return this.testUsers;
    }
    findOne(id) {
        const testUser = this.testUsers.find((testUser) => testUser.id === id);
        if (!testUser) {
            throw new Error(`TestUser with id ${id} not found`);
        }
        return testUser;
    }
    create(createTestUserInput) {
        const testUser = { id: this.testUsers.length + 1, ...createTestUserInput };
        this.testUsers.push(testUser);
        return testUser;
    }
};
exports.TestUsersService = TestUsersService;
exports.TestUsersService = TestUsersService = __decorate([
    (0, common_1.Injectable)()
], TestUsersService);
//# sourceMappingURL=test-users.service.js.map