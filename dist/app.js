"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes/routes"));
var appError_1 = require("./errors/appError");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
app.use(routes_1["default"]);
app.use(function (err, request, response, _) {
    if (err instanceof appError_1.AppError) {
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});
app.listen(process.env.PORT || 4000);
console.log("Online");
exports["default"] = app;
//# sourceMappingURL=app.js.map