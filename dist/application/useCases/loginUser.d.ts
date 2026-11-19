import type { IAuthProvider } from "../interfaces/IauthProvider";
import type { User } from "../models/user";
export declare class LoginUser {
    private authProvider;
    constructor(authProvider: IAuthProvider);
    execute(email: string, password: string): Promise<User>;
}
//# sourceMappingURL=loginUser.d.ts.map