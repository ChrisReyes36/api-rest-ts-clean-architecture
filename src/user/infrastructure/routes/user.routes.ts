import { Router } from "express";
import { MongoRepository } from "../repository/mongo.repository";
import { UserUseCase } from "../../application/userUseCase";
import { UserController } from "../controller/user.controller";

const route = Router();

const mockUserRepository = new MongoRepository();

const userUseCase = new UserUseCase(mockUserRepository);

const userCtrl = new UserController(userUseCase);

route.post("/user", userCtrl.insertCtrl);
route.get("/user", userCtrl.getCtrl);

export default route;
