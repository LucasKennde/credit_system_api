import { jest } from "@jest/globals";

export const prismaClient = {
  user: {
    findFirst: jest.fn(),
  },
  indication: {
    create: jest.fn(),
  },
};

export default prismaClient;
