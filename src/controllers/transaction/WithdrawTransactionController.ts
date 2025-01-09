import { Request, Response } from "express";
import { WithdrawTransactionService } from "../../services/transaction/WithdrawTransactionService";

export class WithdrawTransactionController {
  async handle(req: Request, res: Response) {
    const { id, value } = req.body;

    const withdrawTransactionService = new WithdrawTransactionService();
    const result = await withdrawTransactionService.execute({
      user_id: id,
      value,
    });

    return res.json(result);
  }
}
