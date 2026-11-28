
import type { User } from "../../../application/models/User.js";
import type { UserData } from "../../../application/models/UserData.js";
import type { AppNavigator } from "../../AppNavigator.js";
import type { AuthController } from "../../controllers/AuthController.js";

export class HubView {

    constructor(
        private root: HTMLElement,
        private auth: AuthController,
        private appNavigator: AppNavigator,
    ) { }

    async render(user: User, userData: UserData): Promise<void> {

        const response = await fetch("./presentation/views/hub/hubTemplate.html");

        if (!response.ok) {
            throw new Error("No se pudo cargar el hub");
        }

        const html = await response.text();

        this.root.innerHTML = html;

        this.getElement<HTMLSpanElement>("user-name")
            .textContent = user.displayName ?? user.email;

        this.getElement<HTMLSpanElement>("saved-quiz").textContent = String(userData.savedQuizzes.length);

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

            await this.appNavigator.showAuth();

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