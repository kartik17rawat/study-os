import mongoose, { Schema, models, model } from "mongoose";

const RevisionSchema = new Schema(
  {
    subject: {
      type: String,
      required: true,
    },

    chapter: {
      type: String,
      required: true,
    },

    revised: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Revision || model("Revision", RevisionSchema);