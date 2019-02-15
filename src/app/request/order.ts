export interface Order {
    order: {
        price: number;
        address_id: number;
    },
    invoice: {
        termin?: number;
        currency_id: number;
    }
}
