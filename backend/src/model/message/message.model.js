import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    // Auth was handle by Clerk Auth so ClerkID
    senderId: {
      type: String,
      required: true,
    },
    receiverId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const messageModel = mongoose.model("Message", messageSchema);
