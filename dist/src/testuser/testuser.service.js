"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestuserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TestuserService = class TestuserService {
    prisma;
    testUsers = [];
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createUser(data) {
        return this.prisma.testUser.create({ data });
    }
    async getUsers() {
        return this.prisma.testUser.findMany();
    }
    findAll() {
        return this.testUsers;
    }
    findOne(id) {
        const foundUser = this.testUsers.find((testUser) => testUser.id === id);
        if (!foundUser) {
            throw new Error(`Testuser with id ${id} not found`);
        }
        return foundUser;
    }
    create(createTestUserInput) {
        const testUser = { id: this.testUsers.length + 1, ...createTestUserInput };
        this.testUsers.push(testUser);
        return testUser;
    }
};
exports.TestuserService = TestuserService;
exports.TestuserService = TestuserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TestuserService);
//# sourceMappingURL=testuser.service.js.map