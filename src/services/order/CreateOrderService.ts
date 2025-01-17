import prismaClient from "../../prisma";
interface IOrder {
  user_id: string;
  total: string;
  product_id: string;
}

export class CreateOrderService {
  async execute({ user_id, total, product_id }: IOrder) {
    const order = await prismaClient.order.create({
      data: {
        user_id,
        total,
        product_id,
      },
      select: {
        id: true,
        user_id: true,
        total: true,
        product_id: true,
      },
    });
    return order;
  }
}
