import connectDB from "@/db/Database";
import Cart from "@/models/Cart";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  await connectDB();
  const { userId } = await req.json();
  try {
    const cartItem = await Cart.find({ userId });
    if (!cartItem) {
      return NextResponse.json({
        message: "Cart item not found",
        status: 404,
      });
    }
    return NextResponse.json({
      message: "Cart item found",
      cartItem,
      status: 200,
    });
  } catch (error) {
    console.error("Error in POST /api/cart:", error.toString());
    return NextResponse.json({
      message: "Server error",
      error: error.toString(),
      status: 500,
    });
  }
};
