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
    },
    description: {
      type: String,
      required: true,
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
      required: true,
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
