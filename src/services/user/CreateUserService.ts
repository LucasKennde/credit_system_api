import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  email: string;
  password: string;
  cpf: string;
}
export class CreateUserService {
  async execute({ name, email, password, cpf }: IUserRequest) {
    const userAlreadyExists = await prismaClient.user.findUnique({
      where: { email },
    });
    if (userAlreadyExists) {
      throw new Error("User already exists");
    }
    const hashedPassword = await hash(password, 10);

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        cpf,
      },
    });
    return user;
  }
}
