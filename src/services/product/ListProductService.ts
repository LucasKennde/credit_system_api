import prismaClient from "../../prisma";

export class ListProductService {
  async execute() {
    const products = await prismaClient.product.findMany();
    return products;
  }
}
