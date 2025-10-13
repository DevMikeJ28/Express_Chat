import express, { Application, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import newConnection from "./configs/databases/init.mongodb";

const app: Application = express();

//Configuration:
const enviroment = process.env.NODE_ENV;
dotenv.config({ path: `./src/configs/enviroments/.env.${enviroment}` });
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3005;

// Middleware:
app.use(helmet());
app.use(morgan("dev"));

// Database:
newConnection(process.env.MONGO_URI || "");

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express with TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
