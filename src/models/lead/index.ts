import { Schema, model } from "mongoose";

export interface ILeadDocument extends Document {
  first_name: string;
  last_name: string;
  message?: string;
  video_link?: string;
  email: string;
  phone: string;
  organization_name: string;
  // type_of_organization: string;
}

export const LeadSchema = new Schema<ILeadDocument>(
  {
    first_name: {
      type: String,
      required: true,
    },

    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    // type_of_organization: {
    //   type: String,
    //   required: true,
    // },
    organization_name: {
      type: String,
      required: true,
    },
    message: String,
    video_link: String,
  },
  {
    timestamps: true,
  }
);
export const LeadModel = model<ILeadDocument>("Lead", LeadSchema);
