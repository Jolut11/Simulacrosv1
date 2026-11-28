import { authController } from "../presentation/controllers/AuthController.js";
import { mockAuthProvider } from "../infrastructure/mock/MockAuthProvider.js";
import { RegisterUserUsecase } from "../application/useCases/auth/RegisterUserUsecase.js";
import { LoginUserUsecase } from "../application/useCases/auth/LoginUserUsecase.js";
import { LogoutUserUsecase } from "../application/useCases/auth/LogoutUserUsecase.js";
import { GetCurrentUserUsecase } from "../application/useCases/auth/GetCurrentUserUsecase.js";
export class authContainer {
    static create() {
        const authProvider = new mockAuthProvider();
        const registerUser = new RegisterUserUsecase(authProvider);
        const loginUser = new LoginUserUsecase(authProvider);
        const logoutUser = new LogoutUserUsecase(authProvider);
        const getCurrentUser = new GetCurrentUserUsecase(authProvider);
        return new authController(registerUser, loginUser, logoutUser, getCurrentUser);
    }
}
//# sourceMappingURL=AuthContainer.js.map