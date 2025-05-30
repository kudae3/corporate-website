import dbConnect from "@/database/dbConnect";
import Career from "@/models/career.model";

export const getCareer = async (type: string) => {
  try {
    await dbConnect();
    const careers = await Career.find({ type }).lean();
    // Convert _id and postedBy to string for serialization
    return careers.map((career: any) => ({
      ...career,
      _id: career._id.toString(),
      postedBy: career.postedBy?.toString?.() ?? career.postedBy,
      createdAt: career.createdAt?.toISOString?.() ?? career.createdAt,
      updatedAt: career.updatedAt?.toISOString?.() ?? career.updatedAt,
    }));
  } catch (error) {}
  return null;
};
