require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const connecTed = async() =>{
    await connectDB();
} 
const authRoutes = require('./routes/authRoute');
const categoryRoutes = require('./routes/categoryRoute');
const productRoute = require('./routes/productRoute');
const cors = require('cors');


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
