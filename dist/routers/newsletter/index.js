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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tryCatchHandler_1 = __importDefault(require("../../utils/tryCatchHandler"));
const router = (0, express_1.Router)();
const mailchimp_marketing_1 = __importDefault(require("@mailchimp/mailchimp_marketing"));
const newsletter_1 = require("../../models/newsletter");
const errors_1 = require("../../utils/errors");
mailchimp_marketing_1.default.setConfig({
    apiKey: "3a18fe6fe142cc750c4792ebdafa2e15-us11",
    server: "us11",
});
const LIST_ID = "2f8852b8d9";
const SUBSCRIBED = "subscribed";
const UNSUBSCRIBED = "unsubscribed";
const CLEANED = "cleaned";
const PENDING = "pending";
const TRANSACTIONAL = "transactional";
const addSubscriber = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = yield newsletter_1.NewsletterModel.findOne({ email: req.body.email });
    if (email)
        throw new errors_1.ForbiddenError();
    const member = {
        email_address: req.body.email,
        status: SUBSCRIBED,
    };
    //@ts-ignore
    const response = yield mailchimp_marketing_1.default.lists.addListMember(LIST_ID, member);
    const add = new newsletter_1.NewsletterModel(req.body);
    yield add.save();
    return res.status(200).send(response);
});
router.post("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, tryCatchHandler_1.default)(addSubscriber, req, res);
}));
// router.get("/", async (req: Request, res: Response) => {
//   tryCatchHandler(run, req, res);
// });
// const run = async (req: Response, res: Response) => {
//   //@ts-ignore
//   const response = await client.lists.getAllLists();
//   console.log(response);
//   return res.status(200).send(response);
// };
exports.default = router;
