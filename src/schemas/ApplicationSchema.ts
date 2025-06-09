import { z } from "zod";

export const ApplicationSchema = z.object({
  userId: z.string(),
  careerId: z.string(),
  resume: z.string().min(10, "Resume must be at least 10 characters long"),
  coverLetter: z
    .string()
    .min(10, "Cover letter must be at least 10 characters long"),
});
