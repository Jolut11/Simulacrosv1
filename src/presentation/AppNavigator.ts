
import type { AuthController } from "./controllers/AuthController.js";
import type { UserDataController } from "./controllers/UserDataController.js";

import { AuthView } from "../presentation/views/auth/AuthView.js";
import { HubView } from "../presentation/views/hub/HubView.js";
import type { User } from "../application/models/User.js";

export class AppNavigator {

    constructor(
        private root: HTMLElement,
        private auth: AuthController,
        private userData: UserDataController,
    ) { }

    async start(): Promise<void> {
        //VERIFICAMOS SI HAY UN USUARIO LOGUEADO Y SE DECIDE A QUE VISTA IR SEGUN EL CASO
        const user = await this.auth.getCurrent();

        if (user) {
            await this.showHub(user);
        } else {
            await this.showAuth();
        }
    }

    async showAuth(): Promise<void> {

        const view = new AuthView(
            this.root,
            this.auth,
            this,
        );

        await view.render();
    }

    async showHub(user: User): Promise<void> {
        const userData = await this.userData.getData(user.id);

        if (!userData) {
            throw new Error("No se encontraron los datos del usuario");
        }

        const hubView = new HubView(
            this.root,
            this.auth,
            this
        );

        await hubView.render(user, userData);
    }
}