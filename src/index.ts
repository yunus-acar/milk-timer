import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/v1", route);

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>İnteraktifiş</title>
    <meta name="nofollow" content="all" />
    <meta name="robots" content="noindex, nofollow" />
    <meta name="googlebot" content="noindex, nofollow" />
    <meta name="googlebot-news" content="noindex, nofollow" />
    <meta name="googlebot-video" content="noindex, nofollow" />
    <style>
      html,
      body {
        height: 100%;
        background-color: #222;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        display: flex;
        flex-direction: column;
      }

      .wrapper {
        height: 100%;
        max-width: 500px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        max-width: 100%;
        max-height: 100%;
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <img
        class="center"
        src="https://cdn.discordapp.com/attachments/741442252085395508/1080221278008524800/ii_logo.jpeg"
      />
    </div>
  </body>
</html>`);
});

export const server = app.listen(PORT, () =>
  console.log(`Server started on port http://localhost:${PORT}`)
);
