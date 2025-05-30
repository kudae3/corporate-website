import { model, models, Schema, Document } from "mongoose";

export interface ICareer {
  title: string;
  type: "full-time" | "part-time" | "internship";
  location: string;
  description: string;
  requirements: string;
  salary?: string;
  postedBy: Schema.Types.ObjectId;
}
export interface ICareerDoc extends ICareer, Document {}

const CareerSchema = new Schema<ICareerDoc>(
  {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["full-time", "part-time", "internship"],
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    requirements: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
    },
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
const Career = models.Career || model<ICareerDoc>("Career", CareerSchema);
export default Career;
