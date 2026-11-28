import type { Quiz } from "./Quiz";

export interface UserData {
    id: string;
    savedQuizzes: Quiz[];
}