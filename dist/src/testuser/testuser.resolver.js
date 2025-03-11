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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestUsersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const testuser_service_1 = require("./testuser.service");
const testuser_entity_1 = require(".//testuser.entity");
const create_testuser_input_1 = require("./create-testuser.input");
let TestUsersResolver = class TestUsersResolver {
    testUsersService;
    constructor(testUsersService) {
        this.testUsersService = testUsersService;
    }
    async getTestUsers() {
        return this.testUsersService.findAll();
    }
    async getTestUser(id) {
        return this.testUsersService.findOne(id);
    }
    async createTestUser(createTestUserInput) {
        return this.testUsersService.create(createTestUserInput);
    }
};
exports.TestUsersResolver = TestUsersResolver;
__decorate([
    (0, graphql_1.Query)(() => [testuser_entity_1.Testuser], { name: 'testUsers' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TestUsersResolver.prototype, "getTestUsers", null);
__decorate([
    (0, graphql_1.Query)(() => testuser_entity_1.Testuser, { name: 'testUser' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TestUsersResolver.prototype, "getTestUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => testuser_entity_1.Testuser),
    __param(0, (0, graphql_1.Args)('createTestUserInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_testuser_input_1.CreateTestUserInput]),
    __metadata("design:returntype", Promise)
], TestUsersResolver.prototype, "createTestUser", null);
exports.TestUsersResolver = TestUsersResolver = __decorate([
    (0, graphql_1.Resolver)(() => testuser_entity_1.Testuser),
    __metadata("design:paramtypes", [testuser_service_1.TestuserService])
], TestUsersResolver);
//# sourceMappingURL=testuser.resolver.js.map