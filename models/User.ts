import mongoose, { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    profileImage: {
      type: String,
      default: "",
    },

    studyGoal: {
      type: Number,
      default: 8,
    },

    streak: {
      type: Number,
      default: 0,
    },
    dailyGoal: {
  type: Number,
  default: 8,
},


  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", UserSchema);

export default User;