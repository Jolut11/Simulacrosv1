export class LogoutUserUsecase {
    constructor(authProvider) {
        this.authProvider = authProvider;
    }
    async execute() {
        await this.authProvider.logout();
    }
}
//# sourceMappingURL=LogoutUserUsecase.js.map