import type { User } from "../../application/models/User.js";
import type { IAuthProvider } from "../../application/interfaces/IAuthProvider.js";
export declare class mockAuthProvider implements IAuthProvider {
    private readonly storageKey;
    private registeredAccounts;
    private currentUser;
    private loadCurrentUser;
    private saveCurrentUser;
    register(email: string, password: string, displayName?: string): Promise<User>;
    login(email: string, password: string): Promise<User>;
    logout(): Promise<void>;
    getCurrentUser(): Promise<User | null>;
}
//# sourceMappingURL=MockAuthProvider.d.ts.map