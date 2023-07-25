import express from "express";
import {
    getHomeDetail,
  homeDetail,
//   homeDetailByCustomRepo,
//   homeDetailByRepository,
} from "../controllers/UserController";
import { appendFile } from "fs";

const router = express.Router();

router.get("/home", homeDetail);
router.get("/get-detail", getHomeDetail);

// router.get("/user-crud-repo", homeDetailByRepository);

// router.get("/user-crud-custom-repo", homeDetailByCustomRepo);

export { router };
