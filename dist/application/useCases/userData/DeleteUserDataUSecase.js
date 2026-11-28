export class DeleteUserDataUsecase {
    constructor(userDataProvider) {
        this.userDataProvider = userDataProvider;
    }
    async execute(userID) {
        await this.userDataProvider.deleteUserData(userID);
    }
}
//# sourceMappingURL=DeleteUserDataUSecase.js.map