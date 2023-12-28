import connectDB from "@/db/Database";
import Cart from "@/models/Cart";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  await connectDB();
  const { userId, items } = await req.json();
  try {
    const cartItem = await Cart.create({ userId, items });
    return NextResponse.json({
      message: "Item added successfully",
      cartItem,
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Item not added",
      error,
      status: 500,
    });
  }
};
