import { Router } from "express";
import influencer from "../controllers/influencer.controller";

const router = Router();

router.post("/register", influencer.webRegister);
router.get("/details/:id", influencer.details);
router.put("/update/:id", influencer.update);
router.delete("/delete/:id", influencer.delete);
router.delete("/web-delete/:id", influencer.webDelete);
router.get("/list", influencer.list);
router.post("/code/:id", influencer.code);
router.post("/status/:id", influencer.status);

export default router;
