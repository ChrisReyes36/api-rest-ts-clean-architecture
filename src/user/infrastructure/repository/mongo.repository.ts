import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";
import UserModel from "../model/user.schema";

export class MongoRepository implements UserRepository {
  async findUserById(uuid: string): Promise<UserEntity | null | any> {
    const user = await UserModel.findOne({ uuid });
    return user;
  }
  async registerUser(userIn: UserEntity): Promise<UserEntity | null | any> {
    const user = await UserModel.create(userIn);
    return user;
  }
  async listUsers(): Promise<UserEntity[] | null | any> {
    const users = await UserModel.find();
    return users;
  }
}
