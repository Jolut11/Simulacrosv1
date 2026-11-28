import type { IUserDataProvider } from "../../interfaces/IUserdataProvider";
import type { UserData } from "../../models/UserData";

export class GetUserDataUsecase {
    constructor(
        private userDataProvider: IUserDataProvider
    ) { }

    async execute(
        userID: string
    ): Promise<UserData | null> {
        return await this.userDataProvider.getUserData(userID);
    }
}