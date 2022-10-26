import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./routes/routes";
import { AppError } from "./errors/appError";

const app = express();

app.use(express.json());

app.use(cors());

app.use(router);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode!).json({
      status: "error",
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(process.env.PORT || 4000);
console.log("Online");


export default app;
