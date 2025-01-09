import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { ListProductController } from "./controllers/product/ListProductController";

import uploadConfig from "./config/multer";
import { WithdrawTransactionController } from "./controllers/transaction/WithdrawTransactionController";
const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

router.post("/user", new CreateUserController().handle);
router.post("/auth", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);

router.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);
router.get("/products", new ListProductController().handle);

router.post(
  "/withdraw",
  isAuthenticated,
  new WithdrawTransactionController().handle
);

export { router };
