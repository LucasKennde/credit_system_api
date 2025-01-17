import { CreateProductService } from "../../../services/product/CreateProductService";

test("Criando um novo produto", async () => {
  const createProduct = new CreateProductService();
  const product = await createProduct.execute({
    name: "Carteira de estudante",
    description: "Um produto muito bom",
    price: "45.50",
    image: "string",
  });
  const { id, ...productWithOutProduct } = product;
  expect(productWithOutProduct).toEqual({
    name: "Carteira de estudante",
    description: "Um produto muito bom",
    price: "45.50",
    image: "string",
  });
});
