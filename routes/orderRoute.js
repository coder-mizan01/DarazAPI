import express from "express";

import {placeOrderController,getAllOrderController,getSingleOrderByNumber} from "../controllers/orderController.js";

const router = express.Router();

router.post('/create-order', placeOrderController);
router.get('/all-order',getAllOrderController);
router.get('/single-order/:number',getSingleOrderByNumber)

export default router;