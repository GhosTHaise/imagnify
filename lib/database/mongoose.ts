import mongoose, { Mongoose } from "mongoose";

const MONGOBD_URL = process.env.MONGO_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGOBD_URL) throw new Error("Midding MONGODB_URL");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGOBD_URL, {
      dbName: "imaginify",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
