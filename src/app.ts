import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import leadRouter from "./routers/lead";
import newsLetterRouter from "./routers/newsletter";
dotenv.config();
import "./db";
import fs from "fs";
import morgan from "morgan";

const app = express();

morgan.token("email", function (req: Request, res: Response) {
  return req.body.email;
});
morgan.token("phone", function (req: Request, res: Response) {
  return req.body.phone;
});

const skipSuccess = (req: Request, res: Response) => res.statusCode < 400;
app.use(
  morgan(":method :url :status :http-version :response-time :email :phone", {
    skip: skipSuccess,
    stream: fs.createWriteStream("./access.log", { flags: "a" }),
  })
);
app.use(
  morgan(":method :url :status :http-version :response-time :email :phone")
);

app.use(cors());
app.use(express.json());
app.use("/lead", leadRouter);
app.use("/newsletter", newsLetterRouter);

export default app;
