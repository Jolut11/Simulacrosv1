import type { IAuthProvider } from "../interfaces/IauthProvider";
import type { User } from "../models/user";
export declare class GetCurrentUser {
    private authProvider;
    constructor(authProvider: IAuthProvider);
    execute(): Promise<User | null>;
}
//# sourceMappingURL=getCurrentUser.d.ts.map