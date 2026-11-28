import type { AuthController } from "./controllers/AuthController.js";
import type { UserDataController } from "./controllers/UserDataController.js";
import type { User } from "../application/models/User.js";
export declare class AppNavigator {
    private root;
    private auth;
    private userData;
    constructor(root: HTMLElement, auth: AuthController, userData: UserDataController);
    start(): Promise<void>;
    showAuth(): Promise<void>;
    showHub(user: User): Promise<void>;
}
//# sourceMappingURL=AppNavigator.d.ts.map