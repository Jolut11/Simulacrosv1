export class mockAuthProvider {
    constructor() {
        //CREAMOS LA LISTA DE CUENTAS REGISTRADAS CON 1 CUENTA DE PRUEBA PARA PODER PROBAR EL LOGIN
        this.registeredAccounts = [
            {
                email: "jolut11@gmail.com",
                password: "123456",
                user: {
                    id: crypto.randomUUID(),
                    email: "jolut11@gmail.com",
                    displayName: "Jolut"
                }
            }
        ];
        this.currentUser = null;
    }
    register(email, password, displayName) {
        const existingAccount = this.registeredAccounts.find(account => account.email === email);
        if (existingAccount) {
            throw new Error("Este correo ya está registrado");
        }
        this.currentUser = {
            id: crypto.randomUUID(),
            email,
            ...(displayName !== undefined && { displayName })
        };
        this.registeredAccounts.push({
            email,
            password,
            user: this.currentUser
        });
        return new Promise((resolve) => {
            resolve({
                id: crypto.randomUUID(),
                email,
                ...(displayName !== undefined && { displayName })
            });
        });
    }
    login(email, password) {
        const registeredAccount = this.registeredAccounts.find(account => account.email === email && account.password === password);
        if (!registeredAccount) {
            throw new Error("Correo o contraseña incorrectos");
        }
        this.currentUser = registeredAccount.user;
        return new Promise((resolve) => {
            resolve({
                id: crypto.randomUUID(),
                email,
                displayName: registeredAccount.user?.displayName || ""
            });
        });
    }
    logout() {
        return new Promise((resolve) => {
            this.currentUser = null;
            resolve();
        });
    }
    getCurrentUser() {
        return new Promise((resolve) => {
            resolve(this.currentUser);
        });
    }
}
//# sourceMappingURL=mockAuthProvider.js.map