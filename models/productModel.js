import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique : true,  
    },
    slug: {
      type: String,
      required: true,
      unique : true,
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
    
  },
  { timestamps: true }
);

const productModel = mongoose.model("Product", productSchema);

export default productModel;
