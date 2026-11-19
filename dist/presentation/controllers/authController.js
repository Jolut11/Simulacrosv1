import { RegisterUser } from "../../application/useCases/registerUser.js";
import { LoginUser } from "../../application/useCases/loginUser.js";
import { LogoutUser } from "../../application/useCases/logoutUser.js";
import { GetCurrentUser } from "../../application/useCases/getCurrentUser.js";
export class authController {
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
//# sourceMappingURL=authController.js.map