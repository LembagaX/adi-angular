import { Order } from './order';
import { Product } from './product';

export interface Report {
    most_earn_order: Order;
    most_earn_product: Product;
    most_solded_order: Order;
    most_solded_product: Product;
    orders: Order[];
}
