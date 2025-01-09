import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

export class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, description, price } = req.body;
    const createProductService = new CreateProductService();

    if (!req.file) {
      throw new Error("Error upload file");
    } else {
      const { originalname, filename: image } = req.file;

      const product = await createProductService.execute({
        name,
        description,
        price,
        image,
      });
      return res.status(201).json(product);
    }
  }
}
