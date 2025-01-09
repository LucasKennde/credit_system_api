import prismaClient from "../../prisma";
interface IUserRequest {
  id: string;
}
export class DetailUserService {
  async execute({ id }: IUserRequest) {
    console.log(id);

    const user = await prismaClient.user.findUnique({
      where: { id: id },
      select: {
        id: true,
        name: true,
        email: true,
        wallet: true,
        cpf: true,
        transactions: {
          select: {
            id: true,
            value: true,
            type: true,
          },
        },
        indications: {
          select: {
            id: true,
            indicated_email: true,
            createdAt: true,
            value: true,
          },
        },
        address: true,
        Order: true,
      },
    });
    return user;
  }
}
