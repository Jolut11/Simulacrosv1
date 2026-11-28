import { RegisterUserUsecase } from "../../application/useCases/auth/RegisterUserUsecase.js";
import { LoginUserUsecase } from "../../application/useCases/auth/LoginUserUsecase.js";
import { LogoutUserUsecase } from "../../application/useCases/auth/LogoutUserUsecase.js";
import { GetCurrentUserUsecase } from "../../application/useCases/auth/GetCurrentUserUsecase.js";
export declare class AuthController {
    private registerUser;
    private loginUser;
    private logoutUser;
    private getCurrentUser;
    constructor(registerUser: RegisterUserUsecase, loginUser: LoginUserUsecase, logoutUser: LogoutUserUsecase, getCurrentUser: GetCurrentUserUsecase);
    register(email: string, password: string, displayName?: string): Promise<import("../../application/models/User.js").User>;
    login(email: string, password: string): Promise<import("../../application/models/User.js").User>;
    logout(): Promise<void>;
    getCurrent(): Promise<import("../../application/models/User.js").User | null>;
}
//# sourceMappingURL=AuthController.d.ts.map