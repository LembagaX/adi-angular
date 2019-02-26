import { User } from './user';

export interface Announcement {
    id?: number;
    message: string;
    color: string;
    due?: string;
    created_at?: string;
    updated_at?: string;
    user: User;
}
