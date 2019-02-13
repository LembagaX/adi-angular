import { Address } from './address';

export interface Customer {
    id: number;
    name: string;
    phone: string;
    created_at: string;
    updated_at: string;
    default_address: Address;
    addresses: Address[];
}
