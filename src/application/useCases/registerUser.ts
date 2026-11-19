
import type { IAuthProvider } from "../interfaces/IauthProvider";
import type { User } from "../models/user";

export class RegisterUser {
    constructor(
        private authProvider: IAuthProvider
    ) { }

    async execute(
        email: string,
        password: string,
        displayName?: string
    ): Promise<User> {

        if (!email || !email.includes("@")) {
            throw new Error("Invalid email");
        }

        if (!password || password.length < 6) {
            throw new Error("Password must have at least 6 characters");
        }

        return await this.authProvider.register(
            email,
            password,
            displayName
        );
    }
}
