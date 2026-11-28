export class SaveUserDataUsecase {
    constructor(userDataProvider) {
        this.userDataProvider = userDataProvider;
    }
    async execute(userID, userData) {
        return await this.userDataProvider.saveUserData(userID, userData);
    }
}
//# sourceMappingURL=SaveUserDataUsecase.js.map