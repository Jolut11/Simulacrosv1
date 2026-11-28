import type { UserData } from "../../application/models/UserData";
import type { DeleteUserDataUsecase } from "../../application/useCases/userData/DeleteUserDataUSecase";
import type { GetUserDataUsecase } from "../../application/useCases/userData/GetUserDataUsecase";
import type { SaveUserDataUsecase } from "../../application/useCases/userData/SaveUserDataUsecase";
export declare class UserDataController {
    private getUserData;
    private saveUserData;
    private deleteUserData;
    constructor(getUserData: GetUserDataUsecase, saveUserData: SaveUserDataUsecase, deleteUserData: DeleteUserDataUsecase);
    getData(userID: string): Promise<UserData | null>;
    saveData(userID: string, userData: UserData): Promise<UserData | null>;
    deleteData(userID: string): Promise<void>;
}
//# sourceMappingURL=UserDataController.d.ts.map