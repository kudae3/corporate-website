import { z } from "zod";

const SavedJobSchema = z.object({
  userId: z.string().min(1, "User ID must be provided"),
  careerId: z.string().min(1, "Career ID must be provided"),
});

export default SavedJobSchema;
