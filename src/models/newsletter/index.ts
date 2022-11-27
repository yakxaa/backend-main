import { Schema, model } from "mongoose";

export interface INewsletterDocument extends Document {
  email: string;
}

export const NewsletterSchema = new Schema<INewsletterDocument>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);
export const NewsletterModel = model<INewsletterDocument>(
  "Newsletter",
  NewsletterSchema
);
