
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
   cart : {
      type : Object,
      required : true,
   },
   quantity :{
     type : String,
   },
   name : {
     type : String,
     required : true,
   },
   number:{
    type : String,
    required : true,
   },
   alternative_number:{
      type:String,
   },
   city: {
    type : String,
    required : true,
   },
   area : {
    type : String,
    required : true,
   },
   details_address : {
    type : String,
    required : true,
   },
   total : {
      type : String,
      required : true
   },

},{timestamps:true}) 

const Order = mongoose.model('Order',orderSchema);

export default Order;