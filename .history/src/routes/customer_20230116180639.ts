import { Router } from "express";
import { getAccounts, getAccount, updateAccount, deleteAccount, postAccount } from "../controllers/account";
import { checkJwt } from "../middlewares/session";
const router = Router();

/**
 * http://localhost:3000/account
 */
router.get("/", checkJwt, getAccounts);

router.get("/:id", checkJwt, getAccount);

router.put("/:id", checkJwt, updateAccount);

router.delete("/:id", checkJwt, deleteAccount);

router.post("/", checkJwt, postAccount);


export { router };