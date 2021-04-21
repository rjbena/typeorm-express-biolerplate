import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

import exRoutes from "./routes/ex";

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/", exRoutes);

const PORT = process.env.PORT;

app.listen(PORT, async () => {
  console.log(`Server running at http://localhost:${PORT}`);

  try {
    await createConnection();
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
});
