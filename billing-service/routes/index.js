import { Router } from "express";
import BillingController from "../controller";

const { addBilling } = BillingController;
const router = Router();

router.post('/billing', addBilling)

export default router;