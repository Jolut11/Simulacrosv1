import type { IUserDataProvider } from "../../interfaces/IUserdataProvider";
import type { UserData } from "../../models/UserData";

export class SaveUserDataUsecase {
    constructor(
        private userDataProvider: IUserDataProvider
    ) { }

    async execute(
        userID: string,
        userData: UserData
    ): Promise<UserData | null> {
        return await this.userDataProvider.saveUserData(userID, userData);
    }
}