export class RegisterUser {
    constructor(authProvider) {
        this.authProvider = authProvider;
    }
    async execute(email, password, displayName) {
        if (!email || !email.includes("@")) {
            throw new Error("Invalid email");
        }
        if (!password || password.length < 6) {
            throw new Error("Password must have at least 6 characters");
        }
        return await this.authProvider.register(email, password, displayName);
    }
}
//# sourceMappingURL=registerUser.js.map