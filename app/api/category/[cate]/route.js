import Category from "@/app/category/[categories]/Category";
import connectDB from "@/db/Database";
import ClothingProduct from "@/models/Product";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const category = params.cate;
    const product = await ClothingProduct.find({ category });
    return NextResponse.json(
      {
        status: "success",
        data: product,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        status: "error",
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
};
