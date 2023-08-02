import { Router } from "express";
import { getManagers, getManager, updateManager, deleteManager, postManager } from "../controllers/manager";
import { checkJwt } from "../middlewares/session";
const router = Router();

/**
 * http://localhost:3000/manager
 */
router.get("/", checkJwt, getManagers);

router.get("/:id", checkJwt, getManager);

router.put("/:id", checkJwt, updateManager);

router.delete("/:id", checkJwt, deleteManager);

router.post("/", checkJwt, postManager);


export { router };