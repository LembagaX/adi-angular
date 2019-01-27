export interface CredentialResponse {
    user: {
        id: number;
        name: string,
        email: string
        role: {
            id: number;
            name: string;
            display_name: string;
        }
    };
    token?: string;
    code: number;
}
