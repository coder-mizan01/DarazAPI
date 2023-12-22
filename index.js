import dotenv from "dotenv"
dotenv.config();
import express from "express";
import connectDB  from './config/db.js';

const connecTed = async() =>{
    await connectDB();
} 

import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoute.js';
import productRoute from './routes/productRoute.js';
import orderRoute from './routes/orderRoute.js'
import computer_item_route from "./routes/computer_item_route.js"
import cors from 'cors';



const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


//routes
app.use("/api/auth", authRoutes);
app.use("/api/category",categoryRoutes);
app.use("/api/product",productRoute);
app.use("/api/orders",orderRoute)
app.use("/api/product",computer_item_route)


// Define home route
app.get('/', (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials","true")
  res.send('Hello, world!');
});


const port = process.env.PORT || 5000;


// Start the server
app.listen(port, () => {
  connecTed()
  console.log(`Server listening on port ${port}`);

});
