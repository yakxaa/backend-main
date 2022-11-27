"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const errorHandler = (err, req, res) => {
    const error = new errors_1.BadRequestError();
    const { code, message } = error;
    return res.status(err.code || code).send(err.message || message);
};
exports.default = errorHandler;
