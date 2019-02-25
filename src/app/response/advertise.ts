import { Product } from './product';

export interface Advertise {
    id?: number;
    description: string;
    image: string;
    product_id: number;
    product?: Product;
    created_at?: string;
    updated_at?: string;
}
