import connectDB from "@/db/Database";
import ClothingProduct from "@/models/Product";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  await connectDB();
  try {
    const products = await ClothingProduct.find({});
    return NextResponse.json({
      status: 200,
      message: "success",
      data: products,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
};
