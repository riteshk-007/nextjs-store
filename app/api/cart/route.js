import connectDB from "@/db/Database";
import Cart from "@/models/Cart";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  await connectDB();
  const { userId, items } = await req.json();
  try {
    const cartItem = await Cart.create({ userId, items });
    return NextResponse.json({
      message: "Cart item created",
      cartItem,
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Cart item not created",
      error,
      status: 500,
    });
  }
};

export const GET = async (req) => {
  await connectDB();
  const { userId } = await req.json();
  try {
    const cartItem = await Cart.findOne({ userId });
    return NextResponse.json({
      message: "Cart item found",
      cartItem,
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Cart item not found",
      error,
      status: 500,
    });
  }
};
