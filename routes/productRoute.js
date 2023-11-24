const express = require("express");
const multer = require('multer');
const router = express.Router();
//Multer Configeration
const storage = multer.memoryStorage();
const upload = multer({storage});


const {
  createProductController,
  getProductController,
  getSingleProductController,
  deleteProductController,
  productPhotoController,
  updateProductController,
} = require("../controllers/productController");

const { isLoggedIn, isAdmin } = require("../middlewares/authMiddleware");

router.post("/create-product",isLoggedIn,isAdmin,upload.single('photo'), createProductController);
router.get("/get-product", getProductController);
router.get("/get-product/:slug", getSingleProductController);
router.get("/product-photo/:id", productPhotoController);
router.put("/update-product/:id", updateProductController);
router.delete("/delete-product/:id", deleteProductController);

module.exports = router;
