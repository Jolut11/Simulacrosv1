export class GetUserDataUsecase {
    constructor(userDataProvider) {
        this.userDataProvider = userDataProvider;
    }
    async execute(userID) {
        return await this.userDataProvider.getUserData(userID);
    }
}
//# sourceMappingURL=GetUserDataUsecase.js.map