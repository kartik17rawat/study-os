import mongoose, { Schema, models, model } from "mongoose";

const TaskSchema = new Schema(
  {
    // Will be required later after authentication is connected
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },

    subject: {
      type: String,
      required: true,
    },

    material: {
      type: String,
      required: true,
    },

    chapter: {
      type: String,
      required: true,
    },

    taskType: {
      type: String,
      required: true,
    },

    questionNumbers: {
      type: String,
      required: true,
    },

    priority: {
      type: String,
      default: "Medium",
    },

    estimatedTime: {
      type: Number,
      default: 60,
    },

    reason: {
      type: String,
      default: "",
    },

    completed: {
      type: Boolean,
      default: false,
    },

    dueDate: {
      type: Date,
      default: null,
    },

    notes: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: () => new Date().toLocaleDateString("en-GB"),
    },
  }, 
  {
    timestamps: true,
  }
);

const Task = models.Task || model("Task", TaskSchema);

export default Task;