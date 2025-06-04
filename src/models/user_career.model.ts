import { model, models, Schema } from "mongoose";

export interface IUserCareer {
  userId: Schema.Types.ObjectId;
  careerId: Schema.Types.ObjectId;
  resume: string;
  coverLetter: string;
}

export interface IUserCareerDoc extends IUserCareer, Document {}

const UserCareerSchema = new Schema<IUserCareerDoc>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    careerId: {
      type: Schema.Types.ObjectId,
      ref: "Career",
      required: true,
    },
    resume: {
      type: String,
      required: true,
    },
    coverLetter: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UserCareer =
  models.UserCareer || model<IUserCareerDoc>("UserCareer", UserCareerSchema);
export default UserCareer;
