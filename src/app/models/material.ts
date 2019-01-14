import { Provider } from '../response/provider';

export interface Material {
    id: number;
    name: string;
    slug: string;
    price: number;
    stock: number;
    providers: Provider[];
}
