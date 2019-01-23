import { Price } from './price';
import { Provider } from './provider';

export interface Material {
    id: number;
    name: string;
    price: number;
    stock: number;
    url: string;
    slug: string;
    prices: Price[];
    providers: Provider[];
    code: number;
}
