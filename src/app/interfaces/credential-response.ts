export interface CredentialResponse {
    user: {
        name: string,
        email: string
    };
    token?: string;
    code: number;
}
