import UserModel from "../models/user.schema";
import { UserInterface } from "../types/user.type";

const registerUser = async (user: UserInterface) => {
  const response = await UserModel.create(user);
  return response;
};

const getDetailUser = async (email: string) => {
  const response = await UserModel.findOne({ email });
  return response;
};

export { registerUser, getDetailUser };
