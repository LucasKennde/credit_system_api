import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

export class DetailUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const detailUserService = new DetailUserService();

    const user = await detailUserService.execute({
      id: id,
    });

    return res.json(user);
  }
}
