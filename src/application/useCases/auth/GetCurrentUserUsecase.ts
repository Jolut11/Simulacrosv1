
import type { IAuthProvider } from "../../interfaces/IAuthProvider";
import type { User } from "../../models/User";

export class GetCurrentUserUsecase {
    constructor(
        private authProvider: IAuthProvider
    ) { }

    async execute(): Promise<User | null> {
        return await this.authProvider.getCurrentUser();
    }
}
