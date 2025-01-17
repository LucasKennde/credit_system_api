import prismaClient from "../../prisma";
export interface IIndicationRequest {
  indicator_email: string;
  indicated_email: string;
  value: string;
}
export class CreateIndicationService {
  async execute({
    indicator_email,
    indicated_email,
    value,
  }: IIndicationRequest) {
    const percent = (parseFloat(value) * 10) / 100;
    const indicatorExist = await prismaClient.user.findFirst({
      where: {
        email: indicator_email,
      },
    });

    if (!indicatorExist) {
      throw new Error("Indicator does not exist");
    }

    const indicatedExist = await prismaClient.user.findFirst({
      where: {
        email: indicated_email,
      },
    });

    if (!indicatedExist) {
      throw new Error("Indecated does not exist");
    }

    const indication = await prismaClient.indication.create({
      data: {
        indicator_id: indicatorExist.id,
        indicated_email,
        value: percent,
      },
      select: {
        id: true,
        indicated_email: true,
        value: true,
      },
    });

    return indication;
  }
}
