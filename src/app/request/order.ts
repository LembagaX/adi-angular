export interface Order {
    order: {
        price: number;
        address_id: number;
        discount: number;
    };
    invoice: {
        termin?: number;
        currency_id: number;
    };
}
