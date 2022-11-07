import { Router } from "express";

import userCreateController from "../controllers/user/userCreate.controller";
import userCaptureController from "../controllers/user/userCapture.controller";
import userLoginController from "../controllers/user/userLogin.controller";
import userUpdateController from "../controllers/user/userUpdate.controller";
import userDeleteController from "../controllers/user/userDelete.controller";

import vehicleCaptureUserController from "../controllers/vehicle/vehicleCaptureUser.controller";
import vehicleCaptureAllController from "../controllers/vehicle/vehicleCaptureAll.controller";
import vehicleCaptureController from "../controllers/vehicle/vehicleCapture.controller";
import vehicleCreateController from "../controllers/vehicle/vehicleCreate.controller";

import verifyFieldAndUserMiddleware from "../middlewares/user/verifyFieldAndUser.middleware";
import verifyFieldAndVehicleMiddleware from "../middlewares/vehicle/verifyFieldAndVehicle.middleware";
import verifyTokenMiddleware from "../middlewares/user/verifyToken.middleware";
import verifyUserIdMiddleware from "../middlewares/user/verifyUserId.middleware";

const router = Router();

router.get("/users/:userId", userCaptureController)
router.post("/users", verifyFieldAndUserMiddleware, userCreateController);
router.post("/users/login", userLoginController)
router.patch("/users/:userId", verifyTokenMiddleware, verifyUserIdMiddleware, userUpdateController)
router.delete("/users/:userId", verifyTokenMiddleware, verifyUserIdMiddleware, userDeleteController)

router.get("/vehicles", vehicleCaptureAllController);
router.get("/vehicles/:vehicleId", vehicleCaptureController)
router.get("/vehicles/users/:userId", vehicleCaptureUserController);
router.post("/vehicles", verifyTokenMiddleware ,verifyFieldAndVehicleMiddleware, vehicleCreateController);
router.patch("/vehicles/:vehicleId")

export default router;
