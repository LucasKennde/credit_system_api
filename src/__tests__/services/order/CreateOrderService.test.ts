import { CreateOrderService } from "../../../services/order/CreateOrderService";

const createOrderService = new CreateOrderService();

describe("CreateOrderService", () => {
  it("Realizando uma compra", async () => {
    const result = await createOrderService.execute({
      user_id: "ec796b47-dc81-43b8-ab76-d33ba2962e91",
      total: "67.50",
      product_id: "70f4101b-1ddf-45ee-bab1-d447e1414898",
    });

    const { id, ...resultWithoutId } = result;

    expect(resultWithoutId).toEqual({
      user_id: "ec796b47-dc81-43b8-ab76-d33ba2962e91",
      total: "67.50",
      product_id: "70f4101b-1ddf-45ee-bab1-d447e1414898",
    });
  });
});
