 
import express from 'express';
import { isAdmin, isLoggedIn } from '../middlewares/authMiddleware.js';
import {
  CreateCategoryController,
  UpdateCategoryController,
  Categories,
  SingleCategory,
  DeleteCategory
} from '../controllers/CategoryController.js';
 const router = express.Router();


 router.post('/create-category',CreateCategoryController);
 router.put('/update-category/:id',UpdateCategoryController);
 router.get('/categories',Categories);
 router.get('/single-category/:slug',SingleCategory);
 router.delete('/delete-category/:id',isLoggedIn,isAdmin,DeleteCategory)


 export default router;