import type { User } from "../models/user";
export interface IAuthProvider {
    register(email: string, password: string, displayName?: string): Promise<User>;
    login(email: string, password: string): Promise<User>;
    logout(): Promise<void>;
    getCurrentUser(): Promise<User | null>;
}
//# sourceMappingURL=IauthProvider.d.ts.map