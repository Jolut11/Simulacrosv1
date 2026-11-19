
import { authController } from "../presentation/controllers/authController.js";
import { mockAuthProvider } from "../infrastructure/mock/mockAuthProvider.js";

import { RegisterUser } from "../application/useCases/registerUser.js";
import { LoginUser } from "../application/useCases/loginUser.js";
import { LogoutUser } from "../application/useCases/logoutUser.js";
import { GetCurrentUser } from "../application/useCases/getCurrentUser.js";

export class authContainer {

    static create(): authController {

        const authProvider = new mockAuthProvider();

        const registerUser = new RegisterUser(authProvider);
        const loginUser = new LoginUser(authProvider);
        const logoutUser = new LogoutUser(authProvider);
        const getCurrentUser = new GetCurrentUser(authProvider);

        return new authController(
            registerUser,
            loginUser,
            logoutUser,
            getCurrentUser
        );
    }
}
