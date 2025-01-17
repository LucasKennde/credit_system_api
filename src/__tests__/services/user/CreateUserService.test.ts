import { CreateAddressService } from "../../../services/address/CreateAddressService";
import { CreateUserService } from "../../../services/user/CreateUserService";

const createUserService = new CreateUserService();
const createAddressService = new CreateAddressService();

test("Criando usuario", async () => {
  const result = await createUserService.execute({
    name: "Lucas",
    email: "rodrigo@gmail.com",
    password: "123123",
    cpf: "1123123",
  });
  const { id, ...resultWithOutId } = result;
  expect(resultWithOutId).toEqual({
    name: "Lucas",
    email: "rodrigo@gmail.com",
  });
});
