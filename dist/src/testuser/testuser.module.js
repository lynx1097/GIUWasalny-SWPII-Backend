"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestuserModule = void 0;
const common_1 = require("@nestjs/common");
const testuser_service_1 = require("./testuser.service");
const testuser_controller_1 = require("./testuser.controller");
const prisma_service_1 = require("../prisma/prisma.service");
const testuser_resolver_1 = require("./testuser.resolver");
let TestuserModule = class TestuserModule {
};
exports.TestuserModule = TestuserModule;
exports.TestuserModule = TestuserModule = __decorate([
    (0, common_1.Module)({
        providers: [testuser_service_1.TestuserService, prisma_service_1.PrismaService, testuser_resolver_1.TestUsersResolver],
        controllers: [testuser_controller_1.TestuserController],
        exports: [testuser_service_1.TestuserService],
    })
], TestuserModule);
//# sourceMappingURL=testuser.module.js.map