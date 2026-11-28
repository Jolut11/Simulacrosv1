import type { IUserDataProvider } from "../../interfaces/IUserdataProvider";
import type { UserData } from "../../models/UserData";
export declare class GetUserDataUsecase {
    private userDataProvider;
    constructor(userDataProvider: IUserDataProvider);
    execute(userID: string): Promise<UserData | null>;
}
//# sourceMappingURL=GetUserDataUsecase.d.ts.map