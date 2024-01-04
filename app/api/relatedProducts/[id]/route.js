import connectDB from "@/db/Database";
import ClothingProduct from "@/models/Product";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  await connectDB();
  const { id } = params;
  const product = await ClothingProduct.findById(id);

  if (!product) {
    return NextResponse.json({
      status: 404,
      message: "Product not found",
    });
  } else {
    const relatedProducts = await ClothingProduct.find({
      category: product.category,
    });
    return NextResponse.json({
      status: 200,
      message: "Product found",
      data: product,
      relatedProducts,
    });
  }
};
