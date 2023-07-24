import express from "express";
import { homeDetail } from "../controllers/UserController";
import { appendFile } from "fs";

const router = express.Router();

router.get("/home",homeDetail);

export { router };
