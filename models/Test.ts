import mongoose, { Schema, models, model } from "mongoose";

const TestSchema = new Schema(
  {
    testName: {
      type: String,
      required: true,
    },

    testDate: {
      type: Date,
      required: true,
    },

    syllabus: {
      type: String,
      required: true,
    },

    totalMarks: {
      type: Number,
      default: 300,
    },

    marksScored: {
      type: Number,
      required: true,
    },

    rank: {
      type: Number,
      default: 0,
    },

    percentile: {
      type: Number,
      default: 0,
    },

    physicsMistakes: {
      type: Number,
      default: 0,
    },

    chemistryMistakes: {
      type: Number,
      default: 0,
    },

    mathematicsMistakes: {
      type: Number,
      default: 0,
    },

    sillyMistakes: {
      type: Number,
      default: 0,
    },

    timeManagementMistakes: {
      type: Number,
      default: 0,
    },

    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default models.Test || model("Test", TestSchema);