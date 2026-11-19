import { authController } from "../../controllers/authController.js";
import { authView } from "../auth/authView.js";
export class hubView {
    constructor(root, auth) {
        this.root = root;
        this.auth = auth;
    }
    async render(user) {
        const response = await fetch("./presentation/views/hub/hubTemplate.html");
        if (!response.ok) {
            throw new Error("No se pudo cargar el hub");
        }
        const html = await response.text();
        this.root.innerHTML = html;
        this.getElement("user-name")
            .textContent = user.displayName ?? user.email;
        this.bindEvents();
    }
    bindEvents() {
        this.getElement("logout-button")
            .addEventListener("click", () => {
            void this.handleLogout();
        });
    }
    async handleLogout() {
        try {
            await this.auth.logout();
            const view = new authView(this.root, this.auth);
            await view.render();
        }
        catch (error) {
            console.error(error);
        }
    }
    getElement(id) {
        const element = this.root.querySelector(`#${id}`);
        if (!element) {
            throw new Error(`No se encontró el elemento: ${id}`);
        }
        return element;
    }
}
//# sourceMappingURL=hubView.js.map