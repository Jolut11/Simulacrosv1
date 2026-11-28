export class GetCurrentUserUsecase {
    constructor(authProvider) {
        this.authProvider = authProvider;
    }
    async execute() {
        return await this.authProvider.getCurrentUser();
    }
}
//# sourceMappingURL=GetCurrentUserUsecase.js.map