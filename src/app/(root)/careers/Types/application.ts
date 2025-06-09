import { CareerType } from "./career";
import { UserType } from "./user";

export type ApplicationType = {
  _id: string;
  resume: string;
  coverLetter: string;
  user?: UserType;
  career?: CareerType;
};
