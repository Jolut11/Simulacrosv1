import type { IAuthProvider } from "../../interfaces/IAuthProvider";
export declare class LogoutUserUsecase {
    private authProvider;
    constructor(authProvider: IAuthProvider);
    execute(): Promise<void>;
}
//# sourceMappingURL=LogoutUserUsecase.d.ts.map