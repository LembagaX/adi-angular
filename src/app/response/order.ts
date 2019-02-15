export interface Order {
    id: number;
    number: number;
    customer: string;
    termin: number;
    canceled: boolean;
    created_at: string;
    updated_at: string;
}
