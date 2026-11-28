import type { IUserDataProvider } from "../../interfaces/IUserdataProvider";

export class DeleteUserDataUsecase {
    constructor(
        private userDataProvider: IUserDataProvider
    ) { }

    async execute(
        userID: string
    ): Promise<void> {
        await this.userDataProvider.deleteUserData(userID);
    }
}