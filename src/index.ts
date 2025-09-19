import express, { Application, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

const app: Application = express();

//Configuration:
dotenv.config({ path: "./src/configs/enviroments/.env" });
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3005;

// Middleware:
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express with TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
