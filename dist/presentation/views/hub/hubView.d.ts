import type { User } from "../../../application/models/user.js";
import { authController } from "../../controllers/authController.js";
export declare class hubView {
    private root;
    private auth;
    constructor(root: HTMLElement, auth: authController);
    render(user: User): Promise<void>;
    private bindEvents;
    private handleLogout;
    private getElement;
}
//# sourceMappingURL=hubView.d.ts.map