import { Product } from './product';

export class ShoppingCart {
    id: string;
    name: string;
    products: Product[];
    done: boolean;
    created: Date;
  }
