
import type { AppNavigator } from "../../AppNavigator.js";
import type { AuthController } from "../../controllers/AuthController.js";

export class AuthView {

    constructor(
        private root: HTMLElement,
        private auth: AuthController,
        private appNavigator: AppNavigator,
    ) { }

    async render(): Promise<void> {

        const response = await fetch("./presentation/views/auth/authTemplate.html");

        if (!response.ok) {
            throw new Error("No se pudo cargar la pantalla de autenticación");
        }

        const html = await response.text();

        this.root.innerHTML = html;

        this.bindEvents();
    }

    private bindEvents(): void {

        const form = this.getElement<HTMLFormElement>("login-form");

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            void this.handleLogin();
        });
    }

    private async handleLogin(): Promise<void> {

        const email = this.getElement<HTMLInputElement>("email").value;
        const password = this.getElement<HTMLInputElement>("password").value;

        this.showMessage("");

        try {
            const user = await this.auth.login(email, password);

            await this.appNavigator.showHub(user);

        } catch (error) {

            this.showMessage(
                error instanceof Error
                    ? error.message
                    : "Error al iniciar sesión"
            );

        }
    }

    private showMessage(message: string): void {

        this.getElement<HTMLParagraphElement>("auth-error")
            .textContent = message;
    }

    private getElement<T extends HTMLElement>(id: string): T {

        const element = this.root.querySelector<T>(`#${id}`);

        if (!element) {
            throw new Error(`No se encontró el elemento: ${id}`);
        }

        return element;
    }
}