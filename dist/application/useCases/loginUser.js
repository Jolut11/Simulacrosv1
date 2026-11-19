export class LoginUser {
    constructor(authProvider) {
        this.authProvider = authProvider;
    }
    async execute(email, password) {
        if (!email || !email.includes("@")) {
            throw new Error("Invalid email");
        }
        if (!password) {
            throw new Error("Password is required");
        }
        return await this.authProvider.login(email, password);
    }
}
//# sourceMappingURL=loginUser.js.map