
import Order from "../models/orderModel.js"


const placeOrderController = async (req,res)=>{
    try {
        const {cart,name,email,number,alternative_number,city,area,details_address,delivery_chrage} = req.body;

        if(!cart,!name && !number && !city && !area && !details_address){
            return res.send({message : "please fill up all the fields"})
        }

        //place an order 
        const order = await new Order({cart,name,email,number,alternative_number,city,area,details_address,delivery_chrage}).save();
           
        res.status(201).send({
            success:true,
            message : 'order successful',
            order
        })


    } catch (error) {
        res.status(500).send({
            success : false,
            message : "error in order-controller",
            error
        })
    }
}

const getAllOrderController = async (req,res)=>{
    try {
        //get all orders
        const allOrder = await Order.find();
        res.status(201).send({
            success : true,
            message :"successfully get all orders",
            allOrder,
        })
    } catch (error) {
        res.status(500).send({
            success : false,
            message : "Error in getAllOrderController"
        })
    }
} 


const getSingleOrderByNumber = async (req,res) => {
    try {
        const singleOrder = await Order.findOne({number:req.params.number});
        res.status(201).send({
            success : true,
            message : 'single order by number',
            singleOrder

        })
    } catch (error) {
        res.status(500).send({
            success : false,
            message : "Error in getSingleOrderByNumber"
        })
    }
}

export {
    placeOrderController,
    getAllOrderController,
    getSingleOrderByNumber
} 