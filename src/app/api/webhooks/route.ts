import dbConnect from "@/database/dbConnect";
import { env } from "@/env";
import successResponse from "@/lib/successResponse";
import User from "@/models/user.model";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    if (evt.type == "user.created") {
      await dbConnect();

      const data = evt.data;
      const id = data?.id;
      let username = data?.username;
      const email = data?.email_addresses?.[0]?.email_address;

      if (!username) {
        username = email ? email.split("@")[0] : "unknown_user";
      }

      let role = "user"; // Default role
      if (email == env.ADMIN_EMAIL) {
        role = "admin";
      }

      // check if user already exists
      const existingUser = await User.findOne({ email });
      if (!existingUser) {
        const newUser = new User({
          clerkId: id,
          username,
          email,
          role,
        });
        await newUser.save();
        return successResponse("User created successfully", newUser, 201);
      }
      console.log("Webhook payload:", data);
    }
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
