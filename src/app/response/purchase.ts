import { Provider } from './provider';
import { MaterialPurchase } from './material-purchase';

export interface Purchase {
    id: number;
    amount: number;
    invoice: string;
    note: string;
    purchased_at: string;
    created_at: string;
    updated_at: string;
    url: string;
    providers: Provider[];
    material_purchases: MaterialPurchase[];
}
