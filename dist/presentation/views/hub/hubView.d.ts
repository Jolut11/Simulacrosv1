import type { User } from "../../../application/models/User.js";
import type { UserData } from "../../../application/models/UserData.js";
import type { AppNavigator } from "../../AppNavigator.js";
import type { AuthController } from "../../controllers/AuthController.js";
export declare class HubView {
    private root;
    private auth;
    private appNavigator;
    constructor(root: HTMLElement, auth: AuthController, appNavigator: AppNavigator);
    render(user: User, userData: UserData): Promise<void>;
    private bindEvents;
    private handleLogout;
    private getElement;
}
//# sourceMappingURL=HubView.d.ts.map