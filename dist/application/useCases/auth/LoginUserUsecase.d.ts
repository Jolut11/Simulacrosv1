import type { IAuthProvider } from "../../interfaces/IAuthProvider";
import type { User } from "../../models/User";
export declare class LoginUserUsecase {
    private authProvider;
    constructor(authProvider: IAuthProvider);
    execute(email: string, password: string): Promise<User>;
}
//# sourceMappingURL=LoginUserUsecase.d.ts.map