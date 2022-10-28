"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var userCreate_controller_1 = __importDefault(require("../controllers/user/userCreate.controller"));
var vehicleCapture_controller_1 = __importDefault(require("../controllers/vehicle/vehicleCapture.controller"));
var vehicleCaptureAll_controller_1 = __importDefault(require("../controllers/vehicle/vehicleCaptureAll.controller"));
var vehicleCreate_controller_1 = __importDefault(require("../controllers/vehicle/vehicleCreate.controller"));
var verifyFieldAndUser_middleware_1 = __importDefault(require("../middlewares/user/verifyFieldAndUser.middleware"));
var verifyFieldAndVehicle_middleware_1 = __importDefault(require("../middlewares/vehicle/verifyFieldAndVehicle.middleware"));
var router = (0, express_1.Router)();
router.post("/users", verifyFieldAndUser_middleware_1["default"], userCreate_controller_1["default"]);
router.get("/vehicles", vehicleCaptureAll_controller_1["default"]);
router.post("/vehicles/:userId", verifyFieldAndVehicle_middleware_1["default"], vehicleCreate_controller_1["default"]);
router.get("/vehicles/users/:userId", vehicleCapture_controller_1["default"]);
exports["default"] = router;
//# sourceMappingURL=routes.js.map