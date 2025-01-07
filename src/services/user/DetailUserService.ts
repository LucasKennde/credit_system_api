import prismaClient from "../../prisma";
interface IUserRequest {
  id: string;
}
export class DetailUserService {
  async execute({ id }: IUserRequest) {
    const user = await prismaClient.user.findFirst({ where: { id: id } });
    return user;
  }
}
