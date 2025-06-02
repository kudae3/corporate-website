import dbConnect from "@/database/dbConnect";
import User from "@/models/user.model";
import { currentUser } from "@clerk/nextjs/server";

export const isAdmin = async () => {
  await dbConnect();

  const clerkUser = await currentUser();
  if (!clerkUser) return null;
  const email = clerkUser?.primaryEmailAddress?.emailAddress;
  if (!email) return null;

  const authUser = await User.findOne({ email });
  if (!authUser) return null;

  if (authUser.role == "admin") {
    return true;
  } else {
    return false;
  }
};
