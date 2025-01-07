import prismaClient from "../../prisma";

interface IProductRequest {
  name: string;
  description: string;
  price: number;
  image: string;
}
export class CreateProductService {
  async execute({ name, description, price, image }: IProductRequest) {
    const productAlreadyExist = await prismaClient.product.findFirst({
      where: {
        name: name,
      },
    });
    if (productAlreadyExist) {
      throw new Error("Product already exist");
    }
    const product = await prismaClient.product.create({
      data: {
        name,
        description,
        price,
        image,
      },
    });
    return product;
  }
}