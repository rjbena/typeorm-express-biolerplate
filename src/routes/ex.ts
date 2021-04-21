import { Router } from "express";

import {
  create,
  getAllEx,
  read,
  getById,
  deleteEx,
  update,
} from "../controller/ex";

const router = Router();

router.post("/", create);
router.get("/", getAllEx);
router.get("/name", read);
router.get("/:id", getById);
router.patch("/:id", update);
router.delete("/:id", deleteEx);

export default router;
