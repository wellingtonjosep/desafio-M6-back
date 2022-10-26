import { Router } from "express";
import userCreateController from "../controllers/user/userCreate.controller";

import verifyFieldAndUserMiddleware from "../middlewares/user/verifyFieldAndUser.middleware";

const router = Router();

router.post("/users", verifyFieldAndUserMiddleware, userCreateController)

export default router;
