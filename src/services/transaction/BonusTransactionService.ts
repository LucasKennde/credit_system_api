import prismaClient from "../../prisma";
interface IBonusRequest {
  user_email: string;
  type: string;
  value: number;
}
export class BonusTransactionService {
  async execute({ type, user_email, value }: IBonusRequest) {
    const user = await prismaClient.user.findFirst({
      where: { email: user_email },
    });
    const bonusTransactions = await prismaClient.transaction.create({
      data: {
        type,
        value,
        user_id: user.id,
      },
    });
    const updatedWallet = await prismaClient.user.update({
      where: {
        id: user.id,
      },
      data: {
        wallet: user.wallet + value,
      },
    });

    return bonusTransactions;
  }
}
