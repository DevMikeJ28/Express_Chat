import {model, Schema, Types} from "mongoose";

const DOCUMENT_NAME = "user";
const COLLECTION_NAME = "users";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    userName: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    nickName: {
      type: String,
      trim: true,
      unique: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      required: true,
    },
    isShowOnline: {
      type: Boolean,
      default: true
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

export default model(DOCUMENT_NAME, userSchema, COLLECTION_NAME);