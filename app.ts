import express, { Request, Response } from "express";
import { createConnection } from "typeorm";

const app = express();

const port = 4011;

createConnection()
  .then(() => {
    console.log("DB Connection established");
  })
  .catch((err) => console.log(err));

app.get("/test", (req: Request, res: Response) => {
  res.json({ data: "done" });
});

app.listen(port, () => {
  console.log("listening on port", port);
});
