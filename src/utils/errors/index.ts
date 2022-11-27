export class NotFoundError extends Error {
  code = 404;
  constructor(message?: string) {
    super(message);
    this.name = "NotFoundError";
    this.message = "The resource you are looking for is not found.";
  }
}

export class BadRequestError extends Error {
  code = 400;
  constructor(message?: string) {
    super(message);
    this.name = "BadRequestError";

    this.message = "The request is invalid.";
  }
}

export class AuthenticationError extends Error {
  code = 401;
  constructor(message?: string) {
    super(message);
    this.name = "AuthenticationError";
    this.message = message || "You are not authorized to perform this action.";
  }
}

export class ForbiddenError extends Error {
  code = 403;
  constructor(message?: string) {
    super(message);
    this.name = "ForbiddenError";
    this.message =
      "You are not authorized to perform this action. Forbidden action";
  }
}
