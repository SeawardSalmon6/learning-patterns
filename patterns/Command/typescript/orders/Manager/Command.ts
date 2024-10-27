import { nextOrderId } from '.';
import { Order } from '../types';

type Execute = Function;

export class OrderCommand {
  constructor(public execute: Execute) {
    this.execute = execute;
  }
}

export class PlaceOrderCommand implements OrderCommand {
  public execute: Execute;

  constructor(products: Order['products']) {
    this.execute = (orders: Order[]) => {
      const id = nextOrderId();
      orders.push({
        id,
        products,
        status: 'pending',
      });
      return id;
    };
  }
}

export class DeliverOrderCommand implements OrderCommand {
  public execute: Execute;

  constructor(id: Order['id']) {
    this.execute = (orders: Order[]) => {
      const order = orders.find((order) => order.id === id);
      if (order) {
        order.status = 'delivered';
      }
    };
  }
}

export class CancelOrderCommand implements OrderCommand {
  public execute: Execute;

  constructor(id: Order['id']) {
    this.execute = (orders: Order[]) => {
      const order = orders.find((order) => order.id === id);
      if (order) {
        order.status = 'cancelled';
      }
    };
  }
}

export class GetOrderCommand implements OrderCommand {
  public execute: Execute;

  constructor(id: Order['id']) {
    this.execute = (orders: Order[]) => {
      return orders.find((order) => order.id === id);
    };
  }
}

export class GetOrdersCommand implements OrderCommand {
  public execute: Execute;

  constructor() {
    this.execute = (orders: Order[]) => {
      return orders;
    };
  }
}
