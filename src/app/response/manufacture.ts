import { User } from './user';

export interface Manufacture {
    id: number;
    code: string;
    created_at: string;
    updated_at: string;
    url: string;
    user: User;
}
