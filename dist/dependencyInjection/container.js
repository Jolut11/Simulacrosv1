// ESTE ES EL ARCHIVO CONTAINER PRINCIPAL, DESDE EL CUAL 
// SE REALIZARA LA COMUNICACION CON LOS DEMÁS CONTENEDORES DE LA APLICACIÓN
import { AuthContainer } from "./authContainer";
export class Container {
    static get auth() {
        return AuthContainer;
    }
}
//# sourceMappingURL=container.js.map