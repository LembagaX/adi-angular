import { Provider } from '../response/provider';
import { Price } from '../response/price';

export interface Material {
    id: number;
    name: string;
    slug: string;
    price: number;
    stock: number;
    providers: Provider[];
}
