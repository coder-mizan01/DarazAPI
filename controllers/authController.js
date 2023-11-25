import { hashPassword, comparePassword } from '../helper/authhelper.js';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';


const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;

    if (!name && !email && !password && !phone && !role) {
      return res.send({ message: 'please fill up all the field' })
    }

    //check user
    const existingUser = await User.findOne({ email: email });

    //existingUser
    if (existingUser) {
      res.status(200).send({
        success: false,
        message: "Already register please login",
      })
    }

    //register User

    const hashedPassword = await hashPassword(password)

    const newUser = await new User({ name, email, password: hashedPassword, phone, role, }).save();

    res.status(201).send({
      success: true,
      message: 'user is created',
      newUser,
    })


  } catch (error) {
    res.status(200).send({
      success: false,
      message: 'error in registerController',
      error,
    })
  }
}

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //findUser
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: 'dasdsa'
      })
    }

    const user = await User.findOne({ email: email })

    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'please sign up first',
      })
    }

    const match = await comparePassword(password, user.password);

    if (!match) {
      return res.status(201).send({
        success: false,
        message: 'password does not match',
      })
    }

    //load jwt
    const jwtToken = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '2d' });

    //matching password

    res.status(200).send({
      success: true,
      message: 'welcome',
      user: {
        name: user.name,
        phone: user.phone,
        email: user.email,
        password: password,
        role: user.role

      },
      token: jwtToken,
    })



  } catch (error) {
    res.status(505).send({
      success: false,
      message: 'login is not successful',
      error
    })
  }

}


const getAllUser = async (req, res) => {

  try {
    //all user 
    const allUser = await User.find()
    res.status(200).send({
      success : true,
      allUser
    })
  } catch (error) {
    res.status(500).send({
      message: 'error in getAllUser controller' + error
    })
  }
}


const testController = (req, res) => {
  res.send('Yes you are admin');
}

const userRoute = (req, res) => {
  res.status(200).send({
    ok: true
  })
}

const adminRoute = (req, res) => {
  res.status(200).send({
    ok: true
  })
}

export { 
  registerController, 
  loginController, 
  getAllUser, 
  testController, 
  userRoute, 
  adminRoute 
};
