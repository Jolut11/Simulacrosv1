export class UserDataController {
    constructor(getUserData, saveUserData, deleteUserData) {
        this.getUserData = getUserData;
        this.saveUserData = saveUserData;
        this.deleteUserData = deleteUserData;
    }
    async getData(userID) {
        return await this.getUserData.execute(userID);
    }
    async saveData(userID, userData) {
        return await this.saveUserData.execute(userID, userData);
    }
    async deleteData(userID) {
        return await this.deleteUserData.execute(userID);
    }
}
//# sourceMappingURL=UserDataController.js.map