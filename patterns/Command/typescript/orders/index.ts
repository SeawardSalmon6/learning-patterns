import { OrderManager } from './Manager';
import {
  CancelOrderCommand,
  DeliverOrderCommand,
  GetOrderCommand,
  GetOrdersCommand,
  PlaceOrderCommand,
} from './Manager/Command';

const manager = new OrderManager();

const firstOrderId = manager.execute(
  new PlaceOrderCommand([
    { name: 'Product 1', price: 100 },
    { name: 'Product 2', price: 200 },
  ]),
);

const secondOrderId = manager.execute(
  new PlaceOrderCommand([
    { name: 'Product 3', price: 300 },
    { name: 'Product 4', price: 400 },
  ]),
);

manager.execute(new DeliverOrderCommand(firstOrderId));
manager.execute(new CancelOrderCommand(secondOrderId));

manager.execute(new PlaceOrderCommand([{ name: 'Product 5', price: 500 }]));
console.log({
  myOrder: manager.execute(new GetOrderCommand(firstOrderId)),
  orders: manager.execute(new GetOrdersCommand()),
});
