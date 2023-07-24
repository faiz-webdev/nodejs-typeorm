import express from "express";
import { homeDetail, homeDetailByRepository } from "../controllers/UserController";
import { appendFile } from "fs";

const router = express.Router();

router.get("/home",homeDetail);

router.get("/user-crud-repo",homeDetailByRepository);

export { router };
