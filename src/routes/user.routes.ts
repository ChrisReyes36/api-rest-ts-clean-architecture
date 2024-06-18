import { Router } from "express";
import { getUser, insertUser } from "../controllers/user.controller";

const route = Router();

route.post("/user", insertUser);
route.get("/user", getUser);

export default route;