import z, { string } from "zod";

export const userSchema = z.object({
  clerkId: string().min(1, "Clerk ID is required"),
  username: string().min(1, "Username is required"),
  email: string().email("Invalid email format").min(1, "Email is required"),
  role: string()
    .min(1, "Role is required")
    .refine((value) => ["admin", "user"].includes(value), {
      message: "Role must be either 'admin' or 'user'",
    }),
});
