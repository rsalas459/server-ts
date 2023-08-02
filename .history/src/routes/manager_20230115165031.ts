import { Router } from "express";
import { getPlans, getPlan, updatePlan, deletePlan, postPlan } from "../controllers/plan";
import { checkJwt } from "../middlewares/session";
const router = Router();

/**
 * http://localhost:3000/plan
 */
router.get("/", checkJwt, getPlans);

router.get("/:id", checkJwt, getPlan);

router.put("/:id", checkJwt, updatePlan);

router.delete("/:id", checkJwt, deletePlan);

router.post("/", checkJwt, postPlan);


export { router };