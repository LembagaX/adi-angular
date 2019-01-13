export interface MaterialPuchasing {
    purchasing: {
        provider: {
            id: number;
            name: string;
            slug: string;
        },
        purhcase: {
            id: number;
            invoice: string;
            amount: number;
            note: string;
            purchased_at: string;
        },
        materials: [
            {
                id: number;
                name: string;
                slug: string;
                stock: number;
            }
        ],
        code: number
    };
}
