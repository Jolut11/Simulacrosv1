import type { UserData } from "../../application/models/UserData";
import type { DeleteUserDataUsecase } from "../../application/useCases/userData/DeleteUserDataUSecase";
import type { GetUserDataUsecase } from "../../application/useCases/userData/GetUserDataUsecase";
import type { SaveUserDataUsecase } from "../../application/useCases/userData/SaveUserDataUsecase";

export class UserDataController {
    constructor(
        private getUserData: GetUserDataUsecase,
        private saveUserData: SaveUserDataUsecase,
        private deleteUserData: DeleteUserDataUsecase
    ) { }

    async getData(userID: string) {
        return await this.getUserData.execute(userID);
    }

    async saveData(userID: string, userData: UserData) {
        return await this.saveUserData.execute(userID, userData);
    }

    async deleteData(userID: string) {
        return await this.deleteUserData.execute(userID);
    }
}