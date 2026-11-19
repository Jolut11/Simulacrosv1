export class LogoutUser {
    constructor(authProvider) {
        this.authProvider = authProvider;
    }
    async execute() {
        await this.authProvider.logout();
    }
}
//# sourceMappingURL=logoutUser.js.map