export class GetCurrentUser {
    constructor(authProvider) {
        this.authProvider = authProvider;
    }
    async execute() {
        return await this.authProvider.getCurrentUser();
    }
}
//# sourceMappingURL=getCurrentUser.js.map