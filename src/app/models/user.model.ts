export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    emailVerified: boolean;
    dateOfBirth?: string;
    createDate?: string;
}
