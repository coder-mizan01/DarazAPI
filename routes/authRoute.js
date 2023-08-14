const express = require('express');
const {isLoggedIn,isAdmin} = require('../middlewares/authMiddleware');
const router = express.Router();


const {registerController,loginController,testController,userRoute,adminRoute} = require('../controllers/authController');


router.post('/register',registerController)

router.post('/login',loginController);

router.get('/userdashboard',isLoggedIn,userRoute);

router.get('/admindashboard',isLoggedIn,isAdmin,adminRoute);

router.get('/test', isLoggedIn,isAdmin,testController);

module.exports = router;