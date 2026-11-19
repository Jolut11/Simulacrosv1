
import { authContainer } from "./dependencyInjection/authContainer.js";
import { authView } from "./presentation/views/auth/authView.js";

const auth = authContainer.create();

const root = document.querySelector<HTMLElement>("#app");

if (!root) {
    throw new Error("No se encontró el elemento #app");
}

const view = new authView(root, auth);

void view.render();
