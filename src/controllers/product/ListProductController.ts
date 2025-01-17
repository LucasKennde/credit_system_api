import { Request, Response } from "express";
import { ListProductService } from "../../services/product/ListProductService";

export class ListProductController {
  async handle(req: Request, res: Response) {
    const listProductService = new ListProductService();
    const products = await listProductService.execute();
    return res.json(products);
  }
}
