import errorHandler from "../errorHandler";
import { Request, Response } from "express";

const tryCatchHandler = async (
  controller: Function,
  req: Request,
  res: Response
) => {
  try {
    await controller(req, res);
  } catch (e) {
    console.log(e);
    return errorHandler(e, req, res);
  }
};

export default tryCatchHandler;
