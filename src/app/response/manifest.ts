import { Product } from './product';
import { Manufacture } from './manufacture';

export interface Manifest {
    id: number;
    product: Product;
    manufacture: Manufacture;
    quantity: number;
    created_at: number;
    updated_at: number;
}
