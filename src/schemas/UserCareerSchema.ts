import { z } from "zod";

export const UserCareerSchema = z.object({
  userId: z.string(),
  careerId: z.string(),
  resume: z.string().min(10, "Resume must be at least 10 characters long"),
  coverLetter: z
    .string()
    .min(1, "Cover letter must be at least 10 characters long"),
});
