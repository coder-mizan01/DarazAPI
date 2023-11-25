import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';


const isLoggedIn = (req,res,next) =>{
    try {
        const decode = jwt.verify(req.headers.authorization,process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        res.status(505).send({
            success : false,
            message : 'Error in Login'
        })
    }
}

const isAdmin = async (req,res,next) =>{
  try {
    const user = await User.findById(req.user._id);
    if(user.role !== 1){
       return res.status(201).send({
        success : false,
        message : "unauthorized access"
       })
    }else{
        next();
    }
  } catch (error) {
    res.status(505).send({
        success : false,
        message : 'Error in admin middleware'
    })
  }
}

export{isLoggedIn,isAdmin};