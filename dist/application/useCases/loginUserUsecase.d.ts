import type { IAuthProvider } from "../interfaces/IAuthProvider";
import type { User } from "../models/User";
export declare class LoginUserUsecase {
    private authProvider;
    constructor(authProvider: IAuthProvider);
    execute(email: string, password: string): Promise<User>;
}
//# sourceMappingURL=loginUserUsecase.d.ts.map