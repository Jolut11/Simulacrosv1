export class mockAuthProvider {
    constructor() {
        this.storageKey = "mock-auth-current-user";
        // CUENTAS REGISTRADAS
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
        // RECUPERAMOS LA SESIÓN AL CREAR EL PROVIDER
        this.currentUser = this.loadCurrentUser();
    }
    // OBTENER USUARIO ALMACENADO
    loadCurrentUser() {
        const storedUser = localStorage.getItem(this.storageKey);
        if (!storedUser) {
            return null;
        }
        try {
            return JSON.parse(storedUser);
        }
        catch {
            localStorage.removeItem(this.storageKey);
            return null;
        }
    }
    // GUARDAR USUARIO ACTIVO
    saveCurrentUser(user) {
        this.currentUser = user;
        localStorage.setItem(this.storageKey, JSON.stringify(user));
    }
    async register(email, password, displayName) {
        const existingAccount = this.registeredAccounts.find(account => account.email === email);
        if (existingAccount) {
            throw new Error("Este correo ya está registrado");
        }
        const user = {
            id: crypto.randomUUID(),
            email,
            ...(displayName !== undefined && { displayName })
        };
        this.registeredAccounts.push({
            email,
            password,
            user
        });
        this.saveCurrentUser(user);
        return user;
    }
    async login(email, password) {
        const registeredAccount = this.registeredAccounts.find(account => account.email === email &&
            account.password === password);
        if (!registeredAccount) {
            throw new Error("Correo o contraseña incorrectos");
        }
        const user = registeredAccount.user;
        this.saveCurrentUser(user);
        return user;
    }
    async logout() {
        this.currentUser = null;
        localStorage.removeItem(this.storageKey);
    }
    async getCurrentUser() {
        return this.currentUser;
    }
}
//# sourceMappingURL=MockAuthProvider.js.map