class Order {
  constructor(
    public address: string,
    public number: number,
    public optional: string,
    public paymentOpt: string,
    public orderItem: OrderItem[] = []
  ){}
}

class OrderItem {
  constructor(
    public quantity: number,
    public menuId: string
  ){}
}

export {Order,OrderItem}