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
      enum: {
        values: [
          "electronic-accessories",
          "health-care",
          "girls-fashion",
          "kids-toy",
          "groceries",
          "mens-fashion",
          "baby-care",
          "electronics-device",
          "furniture-items",
          "sports-outdoor",
          "gifts-vouchers",
        ],
        message: `{values} is not supported`,
      },
      requried: true,
    },
    subcategory: {
      type: String,
      enum: {
        values: [
          "smart-phones",
          "computer-accessories",
          "makeup",
          "skin-care",
          "traditional-wear",
          "western-wear",
          "chocolate-candy",
          "cooking-indrigiants",
          "cloths",
          "shoes",
          "dolls",
          "weeding-vouchers",
          "Table",
          "sofa",
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
        values: ["msi","no-brand","cocola","Treate","Nestle","hp","pran","polo","samsung","Bata","apple","SkinPro"],
        message: `{values} is not supported`,
      },
required : true,
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model("Product", productSchema);

export default productModel;
