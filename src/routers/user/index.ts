import { Router, Request, Response } from "express";
import { UserModel } from "../../models/user";
import tryCatchHandler from "../../utils/tryCatchHandler";

const router = Router();

const createUser = async (req: Request, res: Response) => {
  const user = new UserModel(req.body);
  await user.save();
  return res.status(201).send(user);
};

router.post("/", async (req: Request, res: Response) => {
  tryCatchHandler(createUser, req, res);
});

export default router;
