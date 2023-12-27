import connectDB from "@/db/Database";
import ClothingProduct from "@/models/Product";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  await connectDB();
  const { _id } = params;
  const product = await ClothingProduct.findById(_id);
  if (!product) {
    return NextResponse.json({
      status: 404,
      message: "Product not found",
    });
  } else {
    return NextResponse.json({
      status: 200,
      message: "Product found",
      data: product,
    });
  }
};
