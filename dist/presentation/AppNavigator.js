import { AuthView } from "../presentation/views/auth/AuthView.js";
import { HubView } from "../presentation/views/hub/HubView.js";
export class AppNavigator {
    constructor(root, auth, userData) {
        this.root = root;
        this.auth = auth;
        this.userData = userData;
    }
    async start() {
        //VERIFICAMOS SI HAY UN USUARIO LOGUEADO Y SE DECIDE A QUE VISTA IR SEGUN EL CASO
        const user = await this.auth.getCurrent();
        if (user) {
            await this.showHub(user);
        }
        else {
            await this.showAuth();
        }
    }
    async showAuth() {
        const view = new AuthView(this.root, this.auth, this);
        await view.render();
    }
    async showHub(user) {
        const userData = await this.userData.getData(user.id);
        if (!userData) {
            throw new Error("No se encontraron los datos del usuario");
        }
        const hubView = new HubView(this.root, this.auth, this);
        await hubView.render(user, userData);
    }
}
//# sourceMappingURL=AppNavigator.js.map