import connectDB from "@/db/Database";
import ClothingProduct from "@/models/Product";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  await connectDB();
  const products = await ClothingProduct.find({});
  if (!products)
    return NextResponse.json({ status: 400, message: "No products found" });
  return NextResponse.json({
    status: 200,
    message: "Products fetched successfully",
    data: products,
  });
};
