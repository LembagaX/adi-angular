export interface CredentialResponse {
    user: {
        id: number;
        name: string,
        email: string
    };
    token?: string;
    code: number;
}
