import { User } from './user';
import { Manifest } from './manifest';

export interface Manufacture {
    id: number;
    code: string;
    created_at: string;
    updated_at: string;
    url: string;
    manifests: Manifest[];
    products_created: number;
    user: User;
}
