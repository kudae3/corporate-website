import { clerkClient } from "@clerk/nextjs/server";
import errorResponse from "@/lib/responses/errorResponse";
import successResponse from "@/lib/responses/successResponse";

export async function POST(req: Request) {
  const { clerkId } = await req.json();
  try {
    const client = await clerkClient();
    const response = await client.users.unbanUser(clerkId);
    return successResponse("User unbanned successfully", response, 200);
  } catch (error) {
    return errorResponse("Failed to ban user", error, 500);
  }
}
