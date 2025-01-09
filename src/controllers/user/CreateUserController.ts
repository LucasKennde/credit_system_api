import { Response, Request } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";
import { CreateIndicationService } from "../../services/Indication/CreateIndicationService";
import { CreateAddressService } from "../../services/address/CreateAddressService";
import { CreateOrderService } from "../../services/order/CreateOrderService";
import { BonusTransactionService } from "../../services/transaction/BonusTransactionService";
export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password, cpf, indicator_email, address, product } =
      req.body;
    const createUserService = new CreateUserService();

    if (!address) {
      throw new Error("Address not found");
    }
    if (!product) {
      throw new Error("Product not found");
    }

    const user = await createUserService.execute({
      name,
      email,
      password,
      cpf,
    });

    const createAddressService = new CreateAddressService();
    await createAddressService.execute({
      ...address,
      user_id: user.id,
    });

    const createOrderService = new CreateOrderService();
    await createOrderService.execute({
      user_id: user.id,
      product_id: product.id,
      total: product.price,
    });

    if (indicator_email) {
      const createIndicationService = new CreateIndicationService();
      const value = product.price;
      console.log("value controller " + value);

      const newIndication = await createIndicationService.execute({
        indicator_email,
        indicated_email: user.email,
        value: value,
      });

      if (newIndication) {
        const bonusTransactions = new BonusTransactionService();
        await bonusTransactions.execute({
          type: "BONUS",
          value: parseFloat(product.price) * 0.1,
          user_email: indicator_email,
        });
      }
    }
    return res.status(201).json(user);
  }
}
