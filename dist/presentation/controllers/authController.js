import { RegisterUserUsecase } from "../../application/useCases/auth/RegisterUserUsecase.js";
import { LoginUserUsecase } from "../../application/useCases/auth/LoginUserUsecase.js";
import { LogoutUserUsecase } from "../../application/useCases/auth/LogoutUserUsecase.js";
import { GetCurrentUserUsecase } from "../../application/useCases/auth/GetCurrentUserUsecase.js";
export class AuthController {
    constructor(registerUser, loginUser, logoutUser, getCurrentUser) {
        this.registerUser = registerUser;
        this.loginUser = loginUser;
        this.logoutUser = logoutUser;
        this.getCurrentUser = getCurrentUser;
    }
    async register(email, password, displayName) {
        return await this.registerUser.execute(email, password, displayName);
    }
    async login(email, password) {
        return await this.loginUser.execute(email, password);
    }
    async logout() {
        await this.logoutUser.execute();
    }
    async getCurrent() {
        return await this.getCurrentUser.execute();
    }
}
//# sourceMappingURL=AuthController.js.map