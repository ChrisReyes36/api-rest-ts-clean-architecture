import { Request, Response } from "express";
import { getDetailUser, registerUser } from "../services/user.services";

const insertUser = async ({ body }: Request, res: Response) => {
  try {
    const user = await registerUser(body);
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

const getUser = async ({ query }: Request, res: Response) => {
  try {
    const { email } = query;
    const user = await getDetailUser(`${email}`);
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json(error);
  }
};

export { insertUser, getUser };
