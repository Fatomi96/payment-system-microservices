import { Router } from "express";
import Middleware from "../middleware/index.js";
import Controller from "../contoller/index.js";
import { fundAccountSchema } from "../validations/customer.js";

const { validate, checkAccountExists, checkAmountLimit } = Middleware;
const { sendToBilling, fetchAccount } = Controller;

const router = Router();

router.post('/', validate(fundAccountSchema), checkAccountExists, checkAmountLimit, sendToBilling);
router.get('/:id', fetchAccount)

export default router;