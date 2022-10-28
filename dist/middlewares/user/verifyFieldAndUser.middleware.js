"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var database_1 = __importDefault(require("../../database"));
var verifyFieldAndUserMiddleware = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, cpf, phone, birthDate, description, typeUser, password, cep, state, city, road, numberHouse, complement, verifyEmail, errorType;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, email = _a.email, cpf = _a.cpf, phone = _a.phone, birthDate = _a.birthDate, description = _a.description, typeUser = _a.typeUser, password = _a.password, cep = _a.cep, state = _a.state, city = _a.city, road = _a.road, numberHouse = _a.numberHouse, complement = _a.complement;
                return [4 /*yield*/, database_1["default"].user.findUnique({
                        where: {
                            email: email
                        }
                    })];
            case 1:
                verifyEmail = _b.sent();
                if (verifyEmail) {
                    return [2 /*return*/, res.status(400).json({
                            name: "Email error",
                            message: "Email already exists"
                        })];
                }
                errorType = [];
                if (typeof name != "string" || !name) {
                    errorType.push({ name: "Required field" });
                }
                if (typeof email != "string" || !email) {
                    errorType.push({ email: "Required field" });
                }
                if (typeof cpf != "string" || !cpf) {
                    errorType.push({ cpf: "Required field" });
                }
                if (typeof phone != "string" || !phone) {
                    errorType.push({ phone: "Required field" });
                }
                if (typeof birthDate != "string" || !birthDate) {
                    errorType.push({ birthDate: "Required field" });
                }
                if (typeof description != "string" || !description) {
                    errorType.push({ description: "Required field" });
                }
                if (typeof typeUser != "string" || !typeUser) {
                    errorType.push({ typeUser: "Required field" });
                }
                if (typeof password != "string" || !password) {
                    errorType.push({ password: "Required field" });
                }
                if (typeof cep != "string" || !cep) {
                    errorType.push({ cep: "Required field" });
                }
                if (typeof state != "string" || !state) {
                    errorType.push({ state: "Required field" });
                }
                if (typeof city != "string" || !city) {
                    errorType.push({ city: "Required field" });
                }
                if (typeof road != "string" || !road) {
                    errorType.push({ road: "Required field" });
                }
                if (typeof numberHouse != "number" || !numberHouse) {
                    errorType.push({ numberHouse: "Required field" });
                }
                if (typeof complement != "string" || !complement) {
                    errorType.push({ complement: "Required field" });
                }
                if (errorType.length > 0) {
                    return [2 /*return*/, res.status(400).json(errorType)];
                }
                // verificando opções de tipos de usuario
                if (typeUser != "buyer" && typeUser != "advertiser") {
                    return [2 /*return*/, res.status(400).json({
                            name: "typeUser error",
                            message: "the ".concat(typeUser, " user type cannot be registered")
                        })];
                }
                next();
                return [2 /*return*/];
        }
    });
}); };
exports["default"] = verifyFieldAndUserMiddleware;
//# sourceMappingURL=verifyFieldAndUser.middleware.js.map