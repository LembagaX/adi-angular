import { Provider } from './provider';

export interface Depreciation {
    id: number;
    note: string;
    amount: number;
    quantity: number;
    user_id: number;
    material_id: number;
    provider_id: number;
    created_at: string;
    updated_at: string;
    provider: Provider;
}
