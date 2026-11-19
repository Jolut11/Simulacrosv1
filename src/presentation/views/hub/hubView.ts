
import type { User } from "../../../application/models/user.js";
import { authController } from "../../controllers/authController.js";
import { authView } from "../auth/authView.js";

export class hubView {

    constructor(
        private root: HTMLElement,
        private auth: authController
    ) { }

    async render(user: User): Promise<void> {

        const response = await fetch("./presentation/views/hub/hubTemplate.html");

        if (!response.ok) {
            throw new Error("No se pudo cargar el hub");
        }

        const html = await response.text();

        this.root.innerHTML = html;

        this.getElement<HTMLSpanElement>("user-name")
            .textContent = user.displayName ?? user.email;

        this.bindEvents();
    }

    private bindEvents(): void {

        this.getElement<HTMLButtonElement>("logout-button")
            .addEventListener("click", () => {
                void this.handleLogout();
            });
    }

    private async handleLogout(): Promise<void> {

        try {

            await this.auth.logout();

            const view = new authView(this.root, this.auth);
            await view.render();

        } catch (error) {

            console.error(error);

        }
    }

    private getElement<T extends HTMLElement>(id: string): T {

        const element = this.root.querySelector<T>(`#${id}`);

        if (!element) {
            throw new Error(`No se encontró el elemento: ${id}`);
        }

        return element;
    }
}