import type { IAuthProvider } from "../interfaces/IauthProvider";
import type { User } from "../models/user";
export declare class RegisterUser {
    private authProvider;
    constructor(authProvider: IAuthProvider);
    execute(email: string, password: string, displayName?: string): Promise<User>;
}
//# sourceMappingURL=registerUser.d.ts.map