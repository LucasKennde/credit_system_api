import { CreateAddressService } from "../../../services/address/CreateAddressService";

const createAddressService = new CreateAddressService();

test("Criando um endereço", async () => {
  const result = await createAddressService.execute({
    street: "Rua Teste",
    number: "123",
    complement: "Casa",
    postal_code: "6505460",
    city: "fortaleza",
    state: "CE",
    user_id: "ec796b47-dc81-43b8-ab76-d33ba2962e91",
  });

  const { id, ...resultWithOutId } = result;

  expect(resultWithOutId).toEqual({
    street: "Rua Teste",
    number: "123",
    complement: "Casa",
    postal_code: "6505460",
    city: "fortaleza",
    state: "CE",
    user_id: "ec796b47-dc81-43b8-ab76-d33ba2962e91",
  });
});
