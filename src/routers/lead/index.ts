import { Router, Request, Response } from "express";
import { LeadModel } from "../../models/lead";
import tryCatchHandler from "../../utils/tryCatchHandler";

const router = Router();

const createLead = async (req: Request, res: Response) => {
  const lead = new LeadModel(req.body);
  await lead.save();
  return res.status(201).send(lead);
};

router.post("/", async (req: Request, res: Response) => {
  tryCatchHandler(createLead, req, res);
});

export default router;
