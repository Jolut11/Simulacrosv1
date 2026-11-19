import { RegisterUser } from "../../application/useCases/registerUser.js";
import { LoginUser } from "../../application/useCases/loginUser.js";
import { LogoutUser } from "../../application/useCases/logoutUser.js";
import { GetCurrentUser } from "../../application/useCases/getCurrentUser.js";

export class authController {

    constructor(
        private registerUser: RegisterUser,
        private loginUser: LoginUser,
        private logoutUser: LogoutUser,
        private getCurrentUser: GetCurrentUser
    ) { }

    async register(
        email: string,
        password: string,
        displayName?: string
    ) {
        return await this.registerUser.execute(
            email,
            password,
            displayName
        );
    }

    async login(
        email: string,
        password: string
    ) {
        return await this.loginUser.execute(
            email,
            password
        );
    }

    async logout(): Promise<void> {
        await this.logoutUser.execute();
    }

    async getCurrent() {
        return await this.getCurrentUser.execute();
    }
}