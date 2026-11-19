import type { IAuthProvider } from "../interfaces/IauthProvider";
export declare class LogoutUser {
    private authProvider;
    constructor(authProvider: IAuthProvider);
    execute(): Promise<void>;
}
//# sourceMappingURL=logoutUser.d.ts.map