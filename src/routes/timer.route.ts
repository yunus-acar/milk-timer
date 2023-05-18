import { Router } from "express";
import timer from "../controllers/timer.controller";

const router = Router();

router.get("/name/:id", timer.name);
router.get("/list", timer.list);
router.post("/add/:id", timer.add);
router.get("/day-count", timer.dayCount);

export default router;
