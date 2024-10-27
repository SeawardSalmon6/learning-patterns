import { Order } from '../types';
import { OrderCommand } from './Command';

let id = 0;
export function nextOrderId() {
  id += 1;
  return id;
}

export class OrderManager {
  private orders: Order[] = [];

  public execute(command: InstanceType<typeof OrderCommand>) {
    return command.execute(this.orders);
  }
}
