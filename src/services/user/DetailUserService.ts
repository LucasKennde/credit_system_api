import prismaClient from "../../prisma";
interface IUserRequest {
  id: string;
}
export class DetailUserService {
  async execute({ id }: IUserRequest) {
    const user = await prismaClient.user.findFirst({
      where: { id: id },
      select: {
        id: true,
        name: true,
        email: true,
        wallet: true,
        cpf: true,
      },
    });
    return user;
  }
}
