"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";

export async function addImage({ image, userId, path }: AddImageParams) {
  try {
    await connectToDatabase();

    //don't return cache
    revalidatePath(path);

    return JSON.parse(JSON.stringify(image));
  } catch (error) {
    handleError(error);
  }
}
