import { Request, Response } from "express";

const homeDetail = async (req: Request, res: Response) => {
  res.json({
    test: "ok",
  });
};

export { homeDetail };
