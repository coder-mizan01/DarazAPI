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
import cors from 'cors';

// Rest of your code



const app = express();



//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
//app.use(morgan());

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category",categoryRoutes);
app.use("/api/v1/product",productRoute);



// Define a route
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
