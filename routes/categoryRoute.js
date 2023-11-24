 
const express = require('express');
const { isAdmin, isLoggedIn } = require('../middlewares/authMiddleware');
const {CreateCategoryController,UpdateCategoryController,Categories,SingleCategory,DeleteCategory} = require('../controllers/CategoryController')

 const router = express.Router();


 router.post('/create-category',CreateCategoryController);
 router.put('/update-category/:id',UpdateCategoryController);
 router.get('/categories',Categories);
 router.get('/single-category/:slug',SingleCategory);
 router.delete('/delete-category/:id',isLoggedIn,isAdmin,DeleteCategory)


module.exports = router;