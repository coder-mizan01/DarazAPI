import express from "express";

import {placeOrderController,getAllOrderController} from "../controllers/orderController.js";

const router = express.Router();

router.post('/order', placeOrderController);
router.get('/all-order',getAllOrderController);

export default router;