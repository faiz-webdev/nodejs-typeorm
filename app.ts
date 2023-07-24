import express, { Request, Response } from "express";
import { createConnection } from "typeorm";
import { User } from "./entities/User";

const app = express();

const port = 4011;

createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "node-typeorm",
  synchronize: true,
  entities: ['./entities/*.ts'],
  logging: true
})
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
