import { Request, Response, Router } from "express";
import tryCatchHandler from "../../utils/tryCatchHandler";

const router = Router();

import client from "@mailchimp/mailchimp_marketing";
import { NewsletterModel } from "../../models/newsletter";
import { ForbiddenError } from "../../utils/errors";
client.setConfig({
  apiKey: "3a18fe6fe142cc750c4792ebdafa2e15-us11",
  server: "us11",
});

const LIST_ID = "2f8852b8d9";

const SUBSCRIBED = "subscribed";
const UNSUBSCRIBED = "unsubscribed";
const CLEANED = "cleaned";
const PENDING = "pending";
const TRANSACTIONAL = "transactional";

const addSubscriber = async (req: Request, res: Response) => {
  const email = await NewsletterModel.findOne({ email: req.body.email });
  if (email) throw new ForbiddenError();
  const member: SubscriptionMemberType = {
    email_address: req.body.email,
    status: SUBSCRIBED,
  };
  //@ts-ignore
  const response = await client.lists.addListMember(LIST_ID, member);
  const add = new NewsletterModel(req.body);
  await add.save();
  return res.status(201).send(response);
};

type statusEnum =
  | typeof SUBSCRIBED
  | typeof UNSUBSCRIBED
  | typeof CLEANED
  | typeof PENDING
  | typeof TRANSACTIONAL;

type SubscriptionMemberType = {
  email_address: string;
  status: statusEnum;
};

router.post("/user", async (req: Request, res: Response) => {
  tryCatchHandler(addSubscriber, req, res);
});
// router.get("/", async (req: Request, res: Response) => {
//   tryCatchHandler(run, req, res);
// });

// const run = async (req: Response, res: Response) => {
//   //@ts-ignore
//   const response = await client.lists.getAllLists();
//   console.log(response);
//   return res.status(200).send(response);
// };

export default router;
