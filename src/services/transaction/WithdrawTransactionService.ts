import prismaClient from "../../prisma";

interface IWhithDraw {
  user_id: string;
  value: number;
}
export class WithdrawTransactionService {
  async execute({ user_id, value }: IWhithDraw) {
    const user = await prismaClient.user.findUnique({ where: { id: user_id } });
    if (user.wallet - value < 0) {
      throw new Error("Insufficient balance");
    }

    const transaction = await prismaClient.transaction.create({
      data: {
        user_id,
        value,
        type: "Withdraw",
      },
    });

    await prismaClient.user.update({
      where: { id: user_id },
      data: {
        wallet: user.wallet - value,
      },
    });

    return transaction;
  }
}
