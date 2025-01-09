import { Request, Response } from "express";
import { CreateIndicationService } from "../../services/Indication/CreateIndicationService";

export class CreateIndicationController {
  async handle(req: Request, res: Response) {
    const { indicator_id, indicated_email } = req.body;
    const createIndicationService = new CreateIndicationService();
    const indication = await createIndicationService.execute({
      indicator_id,
      indicated_email,
    });
    return res.json(indication);
  }
}
