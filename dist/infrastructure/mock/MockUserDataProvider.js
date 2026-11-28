export class mockUserDataPRovider {
    getUserData(userId) {
        return new Promise((resolve) => {
            const mockUserData = {
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
    saveUserData(userId, userData) {
        return new Promise((resolve) => {
            resolve(userData);
        });
    }
    deleteUserData(userId) {
        return new Promise((resolve) => {
            resolve();
        });
    }
}
//# sourceMappingURL=MockUserDataProvider.js.map