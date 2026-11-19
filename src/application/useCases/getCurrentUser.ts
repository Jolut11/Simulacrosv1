
import type { IAuthProvider } from "../interfaces/IauthProvider";
import type { User } from "../models/user";

export class GetCurrentUser {
    constructor(
        private authProvider: IAuthProvider
    ) { }

    async execute(): Promise<User | null> {
        return await this.authProvider.getCurrentUser();
    }
}
