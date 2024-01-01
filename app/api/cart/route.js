import connectDB from "@/db/Database";
import Cart from "@/models/Cart";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  await connectDB();
  const { userId, items } = await req.json();

  try {
    let cart = await Cart.findOne({
      userId,
      "items.productId": items[0].productId,
    });

    if (cart) {
      return NextResponse.json({
        message: "Item already added",
      });
    } else {
      cart = await Cart.create({ userId, items });
      return NextResponse.json({
        message: "Item added",
        cart,
      });
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      message: "Item not added",
      error,
    });
  }
};

export const DELETE = async (req) => {
  await connectDB();
  const { id } = await req.json();
  try {
    const cart = await Cart.findByIdAndDelete(id);
    return NextResponse.json({
      message: "Item deleted",
      cart,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      message: "Item not deleted",
      error,
    });
  }
};
