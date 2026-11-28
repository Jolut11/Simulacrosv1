import type { IAuthProvider } from "../interfaces/IAuthProvider";
import type { User } from "../models/User";
export declare class GetCurrentUserUsecase {
    private authProvider;
    constructor(authProvider: IAuthProvider);
    execute(): Promise<User | null>;
}
//# sourceMappingURL=GgetCurrentUserUsecase.d.ts.map