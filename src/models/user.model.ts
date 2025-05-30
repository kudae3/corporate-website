import { model, Schema, Document, models } from "mongoose";

export interface IUser {
  clerkId: string;
  username?: string;
  email: string;
  password?: string;
  phone?: string;
  address?: string;
  avatar?: string;
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
    password: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    avatar: {
      type: String,
      default: "/public/default.jpg",
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
