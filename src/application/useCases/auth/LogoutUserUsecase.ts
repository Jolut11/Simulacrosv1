
import type { IAuthProvider } from "../../interfaces/IAuthProvider";

export class LogoutUserUsecase {
    constructor(
        private authProvider: IAuthProvider
    ) { }

    async execute(): Promise<void> {
        await this.authProvider.logout();
    }
}
