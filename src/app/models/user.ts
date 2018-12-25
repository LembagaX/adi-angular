export interface User {
    id?: number;
    name: string;
    email: string;
    password?: string;
    password_confirmation?: string;
    role_id?: number;
    role?: {
        id?: number,
        display_name?: string;
    };
}
