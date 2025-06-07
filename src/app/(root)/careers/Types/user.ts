export type UserType = {
  _id: string;
  clerkId: string;
  username: string;
  email: string;
  role: "admin" | "user";
  createdAt: string;
  updatedAt: string;
  avatar?: string;
  clerkProfile?: {
    banned: boolean;
  };
};
