import { Request, Response } from "express";
import { CreateAddressService } from "../../services/address/CreateAddressService";

export class CreateAddressController {
  async handle(req: Request, res: Response) {
    const { address, user_id } = req.body;
    console.log(address);

    const createAddressService = new CreateAddressService();
    const newAddress = await createAddressService.execute({
      ...address,
      user_id,
    });
    return res.status(201).json(newAddress);
  }
}
