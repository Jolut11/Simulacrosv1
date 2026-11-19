import { RegisterUser } from "../../application/useCases/registerUser.js";
import { LoginUser } from "../../application/useCases/loginUser.js";
import { LogoutUser } from "../../application/useCases/logoutUser.js";
import { GetCurrentUser } from "../../application/useCases/getCurrentUser.js";
export declare class authController {
    private registerUser;
    private loginUser;
    private logoutUser;
    private getCurrentUser;
    constructor(registerUser: RegisterUser, loginUser: LoginUser, logoutUser: LogoutUser, getCurrentUser: GetCurrentUser);
    register(email: string, password: string, displayName?: string): Promise<import("../../application/models/user.js").User>;
    login(email: string, password: string): Promise<import("../../application/models/user.js").User>;
    logout(): Promise<void>;
    getCurrent(): Promise<import("../../application/models/user.js").User | null>;
}
//# sourceMappingURL=authController.d.ts.map