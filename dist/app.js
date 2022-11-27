"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const lead_1 = __importDefault(require("./routers/lead"));
const newsletter_1 = __importDefault(require("./routers/newsletter"));
dotenv_1.default.config();
require("./db");
const fs_1 = __importDefault(require("fs"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
morgan_1.default.token("email", function (req, res) {
    return req.body.email;
});
morgan_1.default.token("phone", function (req, res) {
    return req.body.phone;
});
const skipSuccess = (req, res) => res.statusCode < 400;
app.use((0, morgan_1.default)(":method :url :status :http-version :response-time :email :phone", {
    skip: skipSuccess,
    stream: fs_1.default.createWriteStream("./access.log", { flags: "a" }),
}));
app.use((0, morgan_1.default)(":method :url :status :http-version :response-time :email :phone"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/lead", lead_1.default);
app.use("/newsletter", newsletter_1.default);
exports.default = app;
