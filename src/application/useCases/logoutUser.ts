
import type { IAuthProvider } from "../interfaces/IauthProvider";

export class LogoutUser {
    constructor(
        private authProvider: IAuthProvider
    ) { }

    async execute(): Promise<void> {
        await this.authProvider.logout();
    }
}
