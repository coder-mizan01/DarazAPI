import express from 'express';
import multer from 'multer';
const router = express.Router();

// Multer Configuration
const storage = multer.memoryStorage();
const upload = multer({ storage });

import {
  createProductController,
  getProductController,
  getSingleProductController,
  deleteProductController,
  productPhotoController,
  updateProductController,
} from '../controllers/productController.js';

import { isLoggedIn, isAdmin } from '../middlewares/authMiddleware.js';

router.post("/create-product",isLoggedIn,isAdmin,upload.single('photo'), createProductController);
router.get("/get-product", getProductController);
router.get("/get-product/:slug", getSingleProductController);
router.get("/product-photo/:id", productPhotoController);
router.put("/update-product/:id", updateProductController);
router.delete("/delete-product/:id", deleteProductController);

export default router
