import { connect } from "mongoose";

const DB_URI = process.env.DB_URI || "mongodb://localhost:27019/test";

const dbInit = async () => {
  try {
    const response = await connect(DB_URI);
    console.log("Database connected:", response.connection.db.databaseName);
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

export default dbInit;
