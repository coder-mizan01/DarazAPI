const mongoose = require("mongoose");

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
      enum: {
        values: [
          "women-fashion",
          "health",
          "w-b-j",
          "men-fashion",
          "mother-baby",
          "TV",
          "electronic-accessories",
          "groceries",
          "home-lifestyle",
          "sports-outdoor",
          "automotive-motorbike",
        ],
        message: `{values} is not supported`,
      },
      requried: true,
    },
    subcategory: {
      type: String,
      enum: {
        values: [
          "traditional-wear",
          "western-wear",
          "smart-phones",
          "computer-accessories",
          "chocolate-candy",
          "cooking-indrigiants",
        ],
        message: `{values} is not supported`,
      },
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
      enum: {
        values: ["msi","no-brand","cocola","Treate","Nestle","hp","pran"],
        message: `{values} is not supported`,
      },
      requried: true,
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
