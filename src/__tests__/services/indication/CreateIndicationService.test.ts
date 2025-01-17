import { CreateIndicationService } from "../../../services/Indication/CreateIndicationService";

const createIndicationService = new CreateIndicationService();

test("Criando uma indicação", async () => {
  const result = await createIndicationService.execute({
    indicated_email: "ana@teste.com",
    indicator_email: "lucas@teste.com",
    value: "123",
  });

  const { id, ...resultWithoutId } = result;

  expect(resultWithoutId).toEqual({
    indicated_email: "ana@teste.com",
    value: 12.3,
  });
});
