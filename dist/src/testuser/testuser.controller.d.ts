import { TestuserService } from './testuser.service';
export declare class TestuserController {
    private userService;
    constructor(userService: TestuserService);
    createUser(body: {
        name: string;
        email: string;
    }): Promise<{
        id: number;
        email: string;
        name: string | null;
    }>;
    getUsers(): Promise<{
        id: number;
        email: string;
        name: string | null;
    }[]>;
}
