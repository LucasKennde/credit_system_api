import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

const router = Router();

router.post("/user", new CreateUserController().handle);
router.post("/auth", new AuthUserController().handle);
router.get("/me", new DetailUserController().handle);

export { router };
