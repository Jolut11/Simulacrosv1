
import type { User } from "../../application/models/User.js";
import type { IAuthProvider } from "../../application/interfaces/IAuthProvider.js";

type mockRegisteredAccount = {
    email: string;
    password: string;
    user: User;
};

export class mockAuthProvider implements IAuthProvider {

    private readonly storageKey = "mock-auth-current-user";

    // CUENTAS REGISTRADAS
    private registeredAccounts: mockRegisteredAccount[] = [
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
    private currentUser: User | null = this.loadCurrentUser();

    // OBTENER USUARIO ALMACENADO
    private loadCurrentUser(): User | null {

        const storedUser = localStorage.getItem(this.storageKey);

        if (!storedUser) {
            return null;
        }

        try {
            return JSON.parse(storedUser) as User;
        } catch {
            localStorage.removeItem(this.storageKey);
            return null;
        }
    }

    // GUARDAR USUARIO ACTIVO
    private saveCurrentUser(user: User): void {

        this.currentUser = user;

        localStorage.setItem(
            this.storageKey,
            JSON.stringify(user)
        );
    }

    async register(
        email: string,
        password: string,
        displayName?: string
    ): Promise<User> {

        const existingAccount = this.registeredAccounts.find(
            account => account.email === email
        );

        if (existingAccount) {
            throw new Error("Este correo ya está registrado");
        }

        const user: User = {
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

    async login(email: string, password: string): Promise<User> {

        const registeredAccount = this.registeredAccounts.find(
            account =>
                account.email === email &&
                account.password === password
        );

        if (!registeredAccount) {
            throw new Error("Correo o contraseña incorrectos");
        }

        const user = registeredAccount.user;

        this.saveCurrentUser(user);

        return user;
    }

    async logout(): Promise<void> {

        this.currentUser = null;

        localStorage.removeItem(this.storageKey);
    }

    async getCurrentUser(): Promise<User | null> {
        return this.currentUser;
    }
}