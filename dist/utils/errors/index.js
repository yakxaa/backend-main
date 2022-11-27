"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenError = exports.AuthenticationError = exports.BadRequestError = exports.NotFoundError = void 0;
class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.code = 404;
        this.name = "NotFoundError";
        this.message = "The resource you are looking for is not found.";
    }
}
exports.NotFoundError = NotFoundError;
class BadRequestError extends Error {
    constructor(message) {
        super(message);
        this.code = 400;
        this.name = "BadRequestError";
        this.message = "The request is invalid.";
    }
}
exports.BadRequestError = BadRequestError;
class AuthenticationError extends Error {
    constructor(message) {
        super(message);
        this.code = 401;
        this.name = "AuthenticationError";
        this.message = message || "You are not authorized to perform this action.";
    }
}
exports.AuthenticationError = AuthenticationError;
class ForbiddenError extends Error {
    constructor(message) {
        super(message);
        this.code = 403;
        this.name = "ForbiddenError";
        this.message =
            "You are not authorized to perform this action. Forbidden action";
    }
}
exports.ForbiddenError = ForbiddenError;
