import express from "express"
import {isLoggedIn,isAdmin} from "../middlewares/authMiddleware.js";


import {registerController,loginController,testController,userRoute,adminRoute, getAllUser}
 from "../controllers/authController.js"

const router = express.Router();
router.post('/register',registerController)

router.post('/login',loginController);

router.get('/all-user',getAllUser)

router.get('/userdashboard',isLoggedIn,userRoute);

router.get('/admindashboard',isLoggedIn,isAdmin,adminRoute);

router.get('/test', isLoggedIn,isAdmin,testController);

export default router;