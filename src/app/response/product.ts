export interface Product {
    id: number;
    code: string;
    name: string;
    serial_number: string;
    price: number;
    stock: number;
    created_at: string;
    updated_at: string;
    assemblies: [],
    url: string;
}
