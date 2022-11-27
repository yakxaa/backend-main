import mongoose, { Model } from "mongoose";
import getConfigVars from "../config";
import models from "../models";

mongoose
  .connect(getConfigVars(process.env))
  .then(async () => {
    await Promise.all(
      models.map(async (model: typeof mongoose.Model) => {
        await model.init();
      })
    );
    console.log("DB CONNECTED!");
  })
  .catch((err) => console.log(err));
