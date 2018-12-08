export interface CredentialResponse {
    user: {
        name: String,
        email: String
    };
    token: String;
    code: Number;
}
