import { AuthController } from "../presentation/controllers/AuthController.js";
import { mockAuthProvider } from "../infrastructure/mock/MockAuthProvider.js";
import { RegisterUserUsecase } from "../application/useCases/auth/RegisterUserUsecase.js";
import { LoginUserUsecase } from "../application/useCases/auth/LoginUserUsecase.js";
import { LogoutUserUsecase } from "../application/useCases/auth/LogoutUserUsecase.js";
import { GetCurrentUserUsecase } from "../application/useCases/auth/GetCurrentUserUsecase.js";
import { DeleteUserDataUsecase } from "../application/useCases/userData/DeleteUserDataUSecase.js";
import { GetUserDataUsecase } from "../application/useCases/userData/GetUserDataUsecase.js";
import { SaveUserDataUsecase } from "../application/useCases/userData/SaveUserDataUsecase.js";
import { UserDataController } from "../presentation/controllers/UserDataController.js";
import { mockUserDataPRovider } from "../infrastructure/mock/MockUserDataProvider.js";
import { AppNavigator } from "../presentation/AppNavigator.js";
export class Container {
    static createAppNavigator() {
        //VERIFICAMOS QUE EL ELEMENTO RAÍZ EXISTA EN EL DOM
        const root = document.querySelector("#app");
        if (!root) {
            throw new Error("No se encontró el elemento #app");
        }
        //CREAMOS LOS CONTROLADORES (QUIENES CONTIENEN LOS CASOS DE USO Y LAS DEPENDENCIAS INYECTADAS)
        const authController = this.createAuthController();
        const userDataController = this.createUserDataController();
        //RETORNAMOS EL APPNAVIGATOR CON LOS CONTROLADORES INYECTADOS
        return new AppNavigator(document.getElementById("app"), authController, userDataController);
    }
    static createAuthController() {
        //AQUI SE INYECTA EL PROVIDER DE AUTENTICACION
        const authProvider = new mockAuthProvider();
        //SE CREAN LOS CASOS DE USO CON EL PROVIDER INYECTADO
        const registerUser = new RegisterUserUsecase(authProvider);
        const loginUser = new LoginUserUsecase(authProvider);
        const logoutUser = new LogoutUserUsecase(authProvider);
        const getCurrentUser = new GetCurrentUserUsecase(authProvider);
        return new AuthController(registerUser, loginUser, logoutUser, getCurrentUser);
    }
    static createUserDataController() {
        //AQUI SE INYECTA EL PROVIDER DE DATOS DE USUARIO
        const userDataProvider = new mockUserDataPRovider();
        //SE CREAN LOS CASOS DE USO CON EL PROVIDER INYECTADO
        const getUserData = new GetUserDataUsecase(userDataProvider);
        const saveUserData = new SaveUserDataUsecase(userDataProvider);
        const deleteUserData = new DeleteUserDataUsecase(userDataProvider);
        return new UserDataController(getUserData, saveUserData, deleteUserData);
    }
}
//# sourceMappingURL=Container.js.map