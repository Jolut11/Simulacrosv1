import type { User } from "../../application/models/user";
import type { IAuthProvider } from "../../application/interfaces/IauthProvider";
export declare class localAuthProvider implements IAuthProvider {
    register(email: string, password: string, displayName?: string): Promise<User>;
    login(email: string, password: string): Promise<User>;
    logout(): Promise<void>;
    getCurrentUser(): Promise<User | null>;
}
//# sourceMappingURL=localAuthProvider.d.ts.map