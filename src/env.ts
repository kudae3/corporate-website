import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    CLERK_SECRET_KEY: z.string().min(1),
    MONGODB_URI: z.string().min(10),
    CLERK_WEBHOOK_SIGNING_SECRET: z.string().min(1),
    ADMIN_EMAIL: z.string().email().min(1),
    EDGE_STORE_ACCESS_KEY: z.string().min(1),
    EDGE_STORE_SECRET_KEY: z.string().min(1),
  },
  clientPrefix: "NEXT_PUBLIC_",
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  },
  runtimeEnv: process.env,
});
