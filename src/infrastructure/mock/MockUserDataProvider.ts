import type { IUserDataProvider } from "../../application/interfaces/IUserdataProvider";
import type { UserData } from "../../application/models/UserData";

export class mockUserDataPRovider implements IUserDataProvider {
    getUserData(userId: string): Promise<UserData | null> {
        return new Promise((resolve) => {
            const mockUserData: UserData = {
                id: userId,
                savedQuizzes: [{
                    id: "Mock Quiz", questions: [{
                        questionText: "Mock Question",
                        options: ["Option 1", "Option 2", "Option 3"],
                        correctAnswerIndex: 1
                    }]
                }]
            };
            resolve(mockUserData);
        });
    }

    saveUserData(userId: string, userData: UserData): Promise<UserData | null> {
        return new Promise((resolve) => {
            resolve(userData);
        });
    }

    deleteUserData(userId: string): Promise<void> {
        return new Promise((resolve) => {
            resolve();
        });
    }
}