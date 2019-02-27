import { Advertise } from '../response/advertise';

export interface Catalog {
    id?: number;
    title: string;
    slug?: string;
    description: string;
    created_at?: string;
    updated_at?: string;
    hits?: number;
    url?: string;
    advertises?: Advertise[];
}
