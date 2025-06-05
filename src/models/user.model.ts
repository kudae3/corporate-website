import { model, Schema, Document, models } from "mongoose";

export interface IUser {
  clerkId: string;
  username?: string;
  email: string;
  role?: "user" | "admin";
}

export interface IuserDoc extends IUser, Document {}

const UserSchema = new Schema<IuserDoc>(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

const User = models.User || model<IuserDoc>("User", UserSchema);
export default User;
