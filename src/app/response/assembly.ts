import { Material } from './material';
import { Product } from './product';

export interface Assembly {
    id: number;
    material: Material;
    product: Product;
    quantity: number;
    created_at: string;
    updated_at: string;
}
