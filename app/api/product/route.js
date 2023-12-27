import connectDB from "@/db/Database";
import ClothingProduct from "@/models/Product";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  await connectDB();
  const { name, price, description, category, mainImage } = await req.json();
  const clothingProduct = await ClothingProduct.create({
    name,
    price,
    description,
    category,
    mainImage,
  });
  if (!clothingProduct)
    return NextResponse.json({ status: 400, message: "Product not created" });
  return NextResponse.json({
    status: 201,
    message: "Product created successfully",
    data: clothingProduct,
  });
};

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
