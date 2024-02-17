import "express-async-errors";
import express, { Request, Response, NextFunction} from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router)

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  return response.status(400).json({
    status: "error",
    message: error.message
  })
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
