import type { IUserDataProvider } from "../../application/interfaces/IUserdataProvider";
import type { UserData } from "../../application/models/UserData";
export declare class mockUserDataPRovider implements IUserDataProvider {
    getUserData(userId: string): Promise<UserData | null>;
    saveUserData(userId: string, userData: UserData): Promise<UserData | null>;
    deleteUserData(userId: string): Promise<void>;
}
//# sourceMappingURL=MockUserDataProvider.d.ts.map