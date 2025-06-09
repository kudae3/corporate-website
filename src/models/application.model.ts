import { model, models, Schema } from "mongoose";

export interface IApplication {
  userId: Schema.Types.ObjectId;
  careerId: Schema.Types.ObjectId;
  resume: string;
  coverLetter: string;
  deletedAt?: Date | null;
}

export interface IApplicationDoc extends IApplication, Document {}

const ApplicationSchema = new Schema<IApplicationDoc>(
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
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

ApplicationSchema.index({ deletedAt: 1 }, { expireAfterSeconds: 2592000 }); // 30 days

const Application =
  models.Application ||
  model<IApplicationDoc>("Application", ApplicationSchema);
export default Application;
