import { Product } from './product';

export interface Category {
    id: number;
    name: string;
    slug: string;
    products: Product[];
    created_at: string;
    updated_at: string;
}
