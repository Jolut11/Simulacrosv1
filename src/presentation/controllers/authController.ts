import { RegisterUserUsecase } from "../../application/useCases/auth/RegisterUserUsecase.js";
import { LoginUserUsecase } from "../../application/useCases/auth/LoginUserUsecase.js";
import { LogoutUserUsecase } from "../../application/useCases/auth/LogoutUserUsecase.js";
import { GetCurrentUserUsecase } from "../../application/useCases/auth/GetCurrentUserUsecase.js";

export class AuthController {

    constructor(
        private registerUser: RegisterUserUsecase,
        private loginUser: LoginUserUsecase,
        private logoutUser: LogoutUserUsecase,
        private getCurrentUser: GetCurrentUserUsecase
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