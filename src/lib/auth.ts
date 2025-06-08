import dbConnect from "@/database/dbConnect";
import User from "@/models/user.model";
import { currentUser } from "@clerk/nextjs/server";

export const authUser = async () => {
  await dbConnect();

  const clerkUser = await currentUser();
  if (!clerkUser) return null;
  const email = clerkUser?.primaryEmailAddress?.emailAddress;
  if (!email) return null;
  const authUser = await User.findOne({ email });
  if (!authUser) return null;
  const data = JSON.parse(JSON.stringify(authUser));
  return data;
};
