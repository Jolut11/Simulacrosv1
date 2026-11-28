import type { UserData } from "../models/UserData";
export interface IUserDataProvider {
    getUserData(userId: string): Promise<UserData | null>;
    saveUserData(userId: string, userData: UserData): Promise<UserData | null>;
    deleteUserData(userId: string): Promise<void>;
}
//# sourceMappingURL=IUserdataProvider.d.ts.map