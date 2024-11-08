"use server";

import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongodb";
import { handleError } from "../utils";

export async function getAllUsers() {
  await connectToDatabase();
  const users = await User.find({});
  return JSON.parse(JSON.stringify(users));
}

// export async function createUser(data) {
//   await connectToDatabase();
//   return User.create(data);
// }

export async function createUser(user) {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}
