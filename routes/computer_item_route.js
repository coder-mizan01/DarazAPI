import express from 'express';
import multer from 'multer';
const router = express.Router();

// Multer Configuration
const storage = multer.memoryStorage();
const upload = multer({ storage });

import {
    create_computer_item_controller,
    get_computer_item_controller,
    update_computer_item_controller,
    delete_computer_item_controller,
    single_computer_item_controller,
    computer_item_photo_controller
} from "../controllers/computer_item_controller.js";



router.post("/create-computer-item",upload.single('photo'),create_computer_item_controller );
router.get("/computer-items", get_computer_item_controller);
router.get("/computer-item/:slug", single_computer_item_controller);
router.get("/product-photo/:id", computer_item_photo_controller);
router.put("/update-computer-item/:id", update_computer_item_controller);
router.delete("/delete-computer-item/:id", delete_computer_item_controller);
    
export default router;

