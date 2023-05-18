import influencerRoute from "./timer.route";
import { Router } from "express";

const router = Router();

router.use("/milk", influencerRoute);

export default router;
