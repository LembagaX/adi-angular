import { Customer } from './customer';

export interface Order {
    id: number;
    number: number;
    customer: string;
    invoice: {
        id: number;
        currency_id: number;
        number: string;
        termin: string;
        created_at: string;
        updated_at: string;
    };
    bill_to: Customer;
    canceled: boolean;
    delivery_order_pdf: string;
    delivery_order: {
        id: number;
        number: number;
        order_id: number;
        created_at: string;
        updated_at: string;
    };
    sales_invoice_pdf: string;
    sales_invoice: {
        id: number;
        number: number;
        due: string;
        order_id: number;
        created_at: string;
        updated_at: string;
    };
    price?: number;
    created_at: string;
    updated_at: string;
}
