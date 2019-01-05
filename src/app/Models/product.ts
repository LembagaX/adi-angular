export interface Product {
    position?: number;
    id: number;
    code: string;
    name: string;
    price: number;
    quantity?: number;
    stock?: number;
    discount?: number;
}
