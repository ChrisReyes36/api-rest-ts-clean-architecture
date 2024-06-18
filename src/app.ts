import "dotenv/config";
import express from "express";
import cors from "cors";
import userRouter from "./routes/user.routes";
import dbInit from "./db/mongo";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);

const PORT = process.env.PORT || 3000;

dbInit();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
