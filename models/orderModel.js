
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
   cart : {
      type : Object,
      required : true,
   },
   name : {
     type : String,
     required : true,
   },
   email : {
    type : String,
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
   delivery_chrage : {
      type : String
   },

},{timestamps:true}) 

const Order = mongoose.model('Order',orderSchema);

export default Order;