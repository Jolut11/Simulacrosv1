export class HubView {
    constructor(root, auth, appNavigator) {
        this.root = root;
        this.auth = auth;
        this.appNavigator = appNavigator;
    }
    async render(user, userData) {
        const response = await fetch("./presentation/views/hub/hubTemplate.html");
        if (!response.ok) {
            throw new Error("No se pudo cargar el hub");
        }
        const html = await response.text();
        this.root.innerHTML = html;
        this.getElement("user-name")
            .textContent = user.displayName ?? user.email;
        this.getElement("saved-quiz").textContent = String(userData.savedQuizzes.length);
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
            await this.appNavigator.showAuth();
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
//# sourceMappingURL=HubView.js.map