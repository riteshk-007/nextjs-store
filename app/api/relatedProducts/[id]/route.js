import connectDB from "@/db/Database";
import ClothingProduct from "@/models/Product";
import { NextResponse } from "next/server";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
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
    const shuffledProducts = shuffleArray(relatedProducts);
    const randomRelatedProducts = shuffledProducts.slice(0, 4);
    return NextResponse.json({
      status: 200,
      message: "Product found",
      relatedProducts: randomRelatedProducts,
    });
  }
};
