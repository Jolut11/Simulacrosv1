import type { User } from "../models/user";
export interface AuthProvider {
    register(email: string, password: string, displayName?: string): Promise<User>;
    login(email: string, password: string): Promise<User>;
    logout(): Promise<void>;
    getCurrentUser(): Promise<User | null>;
}
//# sourceMappingURL=authProvider.d.ts.map