import { z } from "zod";

const careerSchema = z.object({
  title: z.string().min(10, "Title must be at least 10 characters long"),
  type: z.enum(["full-time", "part-time", "internship"], {
    errorMap: () => ({
      message: "Type must be one of full-time, part-time, or internship",
    }),
  }),
  location: z.string().min(1, "Location must be at least 1 characters long"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long"),
  requirements: z
    .string()
    .min(10, "Requirements must be at least 10 characters long"),
  salary: z.string().optional(),
});

export default careerSchema;
