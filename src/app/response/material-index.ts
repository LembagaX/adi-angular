import { Price } from './price';
import { Provider } from './provider';

export interface MaterialIndex {
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
