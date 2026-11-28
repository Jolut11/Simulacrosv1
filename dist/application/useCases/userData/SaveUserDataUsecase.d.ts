import type { IUserDataProvider } from "../../interfaces/IUserdataProvider";
import type { UserData } from "../../models/UserData";
export declare class SaveUserDataUsecase {
    private userDataProvider;
    constructor(userDataProvider: IUserDataProvider);
    execute(userID: string, userData: UserData): Promise<UserData | null>;
}
//# sourceMappingURL=SaveUserDataUsecase.d.ts.map