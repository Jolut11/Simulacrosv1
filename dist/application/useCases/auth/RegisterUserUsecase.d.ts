import type { IAuthProvider } from "../../interfaces/IAuthProvider";
import type { User } from "../../models/User";
export declare class RegisterUserUsecase {
    private authProvider;
    constructor(authProvider: IAuthProvider);
    execute(email: string, password: string, displayName?: string): Promise<User>;
}
//# sourceMappingURL=RegisterUserUsecase.d.ts.map