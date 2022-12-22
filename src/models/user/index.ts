import { Schema, model } from "mongoose";

export interface IUserDocument extends Document {
  name: string;
  dob: Date;
  phone: string;
  email: string;
  instagramURL: string | undefined;
  youtubeURL: string | undefined;
  token: string | undefined;
  _id: string;
}

//Employee SCHEMA
export const UserSchema = new Schema<IUserDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    instagramURL: {
      type: String,
    },
    youtubeURL: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//EXPORTING MODEL
export const UserModel = model<IUserDocument>("User", UserSchema);
