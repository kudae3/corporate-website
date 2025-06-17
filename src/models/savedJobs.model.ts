import { model, models, Schema } from "mongoose";

export interface ISavedJob {
  userId: Schema.Types.ObjectId;
  careerId: Schema.Types.ObjectId;
}
export interface ISavedJobDoc extends ISavedJob, Document {}

const savedJobsSchema = new Schema<ISavedJobDoc>(
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
  },
  { timestamps: true }
);

// prevent duplicate saved jobs for the same user and career
savedJobsSchema.index({ userId: 1, careerId: 1 }, { unique: true });

const SavedJobs =
  models.SavedJobs || model<ISavedJobDoc>("SavedJobs", savedJobsSchema);

export default SavedJobs;
