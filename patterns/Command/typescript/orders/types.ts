export type Product = {
  name: string;
  price: number;
};

export type OrderStatus = 'pending' | 'delivered' | 'cancelled';

export type Order = {
  id: number;
  status: OrderStatus;
  products: Product[];
};
