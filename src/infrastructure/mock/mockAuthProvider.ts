
import type { User } from "../../application/models/user";
import type { IAuthProvider } from "../../application/interfaces/IauthProvider";

type mockRegisteredAccount = {
    email: string;
    password: string;
    user: User;
};

export class mockAuthProvider implements IAuthProvider {

    //CREAMOS LA LISTA DE CUENTAS REGISTRADAS CON 1 CUENTA DE PRUEBA PARA PODER PROBAR EL LOGIN
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

    private currentUser: User | null = null;

    register(email: string, password: string, displayName?: string): Promise<User> {
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

        return new Promise<User>((resolve) => {
            resolve({
                id: crypto.randomUUID(),
                email,
                ...(displayName !== undefined && { displayName })
            });
        });
    }

    login(email: string, password: string): Promise<User> {

        const registeredAccount = this.registeredAccounts.find(account => account.email === email && account.password === password);

        if (!registeredAccount) {
            throw new Error("Correo o contraseña incorrectos");
        }

        this.currentUser = registeredAccount.user;

        return new Promise<User>((resolve) => {
            resolve({
                id: crypto.randomUUID(),
                email,
                displayName: registeredAccount.user?.displayName || ""
            });
        });
    }

    logout(): Promise<void> {
        return new Promise<void>((resolve) => {
            this.currentUser = null;
            resolve();
        });
    }

    getCurrentUser(): Promise<User | null> {
        return new Promise((resolve) => {
            resolve(this.currentUser);
        });
    }
}
