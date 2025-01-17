import prismaClient from "../../prisma";

interface IAddressRequest {
  postal_code: string;
  street: string;
  number: string;
  city: string;
  state: string;
  user_id: string;
  complement?: string;
}

export class CreateAddressService {
  async execute({
    postal_code,
    street,
    number,
    city,
    state,
    complement,
    user_id,
  }: IAddressRequest) {
    const address = await prismaClient.address.create({
      data: {
        postal_code,
        street,
        number,
        city,
        state,
        complement,
        user_id,
      },
      select: {
        id: true,
        state: true,
        street: true,
        number: true,
        complement: true,
        user_id: true,
        postal_code: true,
        city: true,
      },
    });
    return address;
  }
}
