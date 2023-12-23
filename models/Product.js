import mongoose from "mongoose";

const clothingProduct = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
    enum: ["Men", "Women", "Kids"],
  },
  size: {
    type: String,
    enum: ["Small", "Medium", "Large", "Extra Large"],
    default: "Small",
  },
  mainImage: {
    type: {
      data: Buffer,
      contentType: String,
    },
    required: true,
  },
  additionalImages: [
    {
      data: Buffer,
      contentType: String,
    },
  ],
});

const ClothingProduct =
  mongoose.models.ClothingProduct ||
  mongoose.model("ClothingProduct", clothingProduct);

export default ClothingProduct;
