import { MaterialPurchased } from 'src/app/material-purchased';

export interface MaterialPuchasing {
    provider: {
        name: string;
    };
    purchase: {
        invoice: string;
        amount: number;
        note: string;
        purchased_at: string;
    };
    materials: MaterialPurchased[];
}
