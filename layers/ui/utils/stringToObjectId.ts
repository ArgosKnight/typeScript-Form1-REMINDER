import { ObjectId } from "mongodb";
import mongoose  from "mongoose";

export function stringToObjectId(id: string): ObjectId {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = new Error('Invalid ID');
    (error as any).statusCode = 400;
    throw error;
  }
  return new ObjectId(id);
}
