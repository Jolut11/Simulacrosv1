import { authController } from "../../controllers/authController.js";
import { hubView } from "../hub/hubView.js";
export class authView {
    constructor(root, auth) {
        this.root = root;
        this.auth = auth;
    }
    async render() {
        const response = await fetch("./presentation/views/auth/authTemplate.html");
        if (!response.ok) {
            throw new Error("No se pudo cargar la pantalla de autenticación");
        }
        const html = await response.text();
        this.root.innerHTML = html;
        this.bindEvents();
    }
    bindEvents() {
        const form = this.getElement("login-form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            void this.handleLogin();
        });
    }
    async handleLogin() {
        const email = this.getElement("email").value;
        const password = this.getElement("password").value;
        this.showMessage("");
        try {
            const user = await this.auth.login(email, password);
            const view = new hubView(this.root, this.auth);
            await view.render(user);
        }
        catch (error) {
            this.showMessage(error instanceof Error
                ? error.message
                : "Error al iniciar sesión");
        }
    }
    showMessage(message) {
        this.getElement("auth-error")
            .textContent = message;
    }
    getElement(id) {
        const element = this.root.querySelector(`#${id}`);
        if (!element) {
            throw new Error(`No se encontró el elemento: ${id}`);
        }
        return element;
    }
}
//# sourceMappingURL=authView.js.map