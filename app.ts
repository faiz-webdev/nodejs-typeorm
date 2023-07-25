import express, { NextFunction, Request, Response } from "express";
import { createConnection } from "typeorm";
import { User } from "./entities/User";
import { router } from "./routes/routes";

const app = express();

const port = 4011;

app.use("/", router);

createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "node-typeorm",
  synchronize: true,
  entities: ["./entity-relationship/*.ts"],
  //   entities: ["./schema/*.ts"],
  //   logging: true,
})
  .then(() => {
    console.log("DB Connection established");
  })
  .catch((err) => console.log(err));

app.get("/test", (req: Request, res: Response) => {
  res.json({ data: "done" });
});

function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // res.locals.error = err;
  const status = err.status || 500;
  res.status(status).send(err);
  // res.render("error");

  // res.status(2000).json(err.name)
  // console.log(err.name)
  // throw new Error(err.message)

  // throw err;
}
app.use(errorHandler);

app.listen(port, () => {
  console.log("listening on port", port);
});
