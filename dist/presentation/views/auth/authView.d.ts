import { authController } from "../../controllers/authController.js";
export declare class authView {
    private root;
    private auth;
    constructor(root: HTMLElement, auth: authController);
    render(): Promise<void>;
    private bindEvents;
    private handleLogin;
    private showMessage;
    private getElement;
}
//# sourceMappingURL=authView.d.ts.map