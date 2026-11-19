
import type { IAuthProvider } from "../interfaces/IauthProvider";
import type { User } from "../models/user";

export class LoginUser {
    constructor(
        private authProvider: IAuthProvider
    ) { }

    async execute(
        email: string,
        password: string
    ): Promise<User> {

        if (!email || !email.includes("@")) {
            throw new Error("Invalid email");
        }

        if (!password) {
            throw new Error("Password is required");
        }

        return await this.authProvider.login(
            email,
            password
        );
    }
}
