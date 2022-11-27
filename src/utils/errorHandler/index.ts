import { Request, Response } from "express";
import { BadRequestError } from "../errors";

const errorHandler = (err: any, req: Request, res: Response) => {
  const error = new BadRequestError();
  const { code, message } = error;
  return res.status(err.code || code).send(err.message || message);
};

export default errorHandler;
