import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use("/api/v1", route);

app.get("/", (req, res) => {
  res.send("API Running");
});

export const server = app.listen(PORT, () =>
  console.log(`Server started on port http://localhost:${PORT}`)
);
