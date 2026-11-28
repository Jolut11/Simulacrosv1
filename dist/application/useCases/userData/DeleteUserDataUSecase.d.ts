import type { IUserDataProvider } from "../../interfaces/IUserdataProvider";
export declare class DeleteUserDataUsecase {
    private userDataProvider;
    constructor(userDataProvider: IUserDataProvider);
    execute(userID: string): Promise<void>;
}
//# sourceMappingURL=DeleteUserDataUSecase.d.ts.map