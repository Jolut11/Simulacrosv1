import { authController } from "../controllers/authController.js";
export class authView {
    constructor(root, auth) {
        this.root = root;
        this.auth = auth;
    }
    render() {
        this.root.innerHTML = `
      <section id="authContainer">

        <h2>Autenticación</h2>

        <div>
          <button id="showLogin">Iniciar sesión</button>
          <button id="showRegister">Registrarse</button>
        </div>

        <form id="authForm">

          <div id="nameGroup" hidden>
            <label for="displayName">Nombre</label>
            <input
              type="text"
              id="displayName"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label for="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              required
            />
          </div>

          <div>
            <label for="password">Contraseña</label>
            <input
              type="password"
              id="password"
              required
            />
          </div>

          <button type="submit" id="submitButton">
            Iniciar sesión
          </button>

        </form>

        <p id="authMessage"></p>

        <section id="userSection" hidden>
          <h3>Sesión iniciada</h3>
          <p id="userInfo"></p>
          <button id="logoutButton">Cerrar sesión</button>
        </section>

      </section>
    `;
        this.bindEvents();
    }
    bindEvents() {
        this.getElement("showLogin")
            .addEventListener("click", () => this.showLogin());
        this.getElement("showRegister")
            .addEventListener("click", () => this.showRegister());
        this.getElement("authForm")
            .addEventListener("submit", (event) => {
            event.preventDefault();
            void this.handleSubmit();
        });
        this.getElement("logoutButton")
            .addEventListener("click", () => {
            void this.handleLogout();
        });
    }
    showLogin() {
        this.getElement("nameGroup").hidden = true;
        this.getElement("submitButton")
            .textContent = "Iniciar sesión";
        this.clearMessage();
    }
    showRegister() {
        this.getElement("nameGroup").hidden = false;
        this.getElement("submitButton")
            .textContent = "Registrarse";
        this.clearMessage();
    }
    async handleSubmit() {
        const email = this.getElement("email").value;
        const password = this.getElement("password").value;
        const isRegister = !this.getElement("nameGroup").hidden;
        this.clearMessage();
        try {
            let user;
            if (isRegister) {
                const displayName = this.getElement("displayName").value;
                user = await this.auth.register(email, password, displayName || undefined);
            }
            else {
                user = await this.auth.login(email, password);
            }
            this.showUser(user);
        }
        catch (error) {
            this.showMessage(error instanceof Error ? error.message : "Ha ocurrido un error");
        }
    }
    async handleLogout() {
        try {
            await this.auth.logout();
            this.getElement("userSection").hidden = true;
            this.getElement("authForm").hidden = false;
            this.showMessage("Sesión cerrada correctamente");
        }
        catch (error) {
            this.showMessage(error instanceof Error ? error.message : "Error al cerrar sesión");
        }
    }
    showUser(user) {
        this.getElement("authForm").hidden = true;
        this.getElement("userSection").hidden = false;
        this.getElement("userInfo")
            .textContent = `Usuario: ${user.displayName ?? user.email}`;
        this.showMessage("Autenticación exitosa");
    }
    showMessage(message) {
        this.getElement("authMessage")
            .textContent = message;
    }
    clearMessage() {
        this.showMessage("");
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