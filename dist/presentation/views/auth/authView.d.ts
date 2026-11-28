import type { AppNavigator } from "../../AppNavigator.js";
import type { AuthController } from "../../controllers/AuthController.js";
export declare class AuthView {
    private root;
    private auth;
    private appNavigator;
    constructor(root: HTMLElement, auth: AuthController, appNavigator: AppNavigator);
    render(): Promise<void>;
    private bindEvents;
    private handleLogin;
    private showMessage;
    private getElement;
}
//# sourceMappingURL=AuthView.d.ts.map