import mongoose from "mongoose";


const computer_item_schema = new mongoose.Schema({
    title:{
        type: String,
        unique: true,
        required : true,
    },
    slug: {
        type: String,
        unique : true,
        required: true,
      },
      specification_property: { 
        type: String,
        required: true,
      },
      specification_value: {
        type : String,
        required : true,
      },
      price: {
        type: Number,
        required: true,
      },
      category: {
        type: String,
        requried: true,
      },
      subcategory: {
        type: String,
        requried: true,
      },
      quantity: {
        type: Number,
      },
      photo: {
        data: Buffer,
        contentType: String,
      },
      brand: {
        type: String,
      },
      model :{
        type : String,
      }
      
},{timestamps:true})

const computer_item_model= mongoose.model('Computer_items',computer_item_schema);
export default  computer_item_model;