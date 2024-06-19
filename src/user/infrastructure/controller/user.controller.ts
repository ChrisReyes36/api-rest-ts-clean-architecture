import { Request, Response } from "express";
import { UserUseCase } from "../../application/userUseCase";

export class UserController {
  constructor(private userUseCase: UserUseCase) {}

  public insertCtrl = async ({ body }: Request, res: Response) => {
    const user = await this.userUseCase.registerUser(body);
    res.status(201).json(user);
  };

  public getCtrl = async ({ query }: Request, res: Response) => {
    const { uuid } = query;
    const user = await this.userUseCase.getDetailUser(`${uuid}`);
    res.status(200).json({ user });
  };
}
