"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CardSkeleton from "./CardSkeleton";

const RelatedProducts = ({ id }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios(`/api/relatedProducts/${id}`);

      setProduct(res.data);
    };
    fetchProduct();
  }, [id]);

  console.log();

  if (!product?.relatedProducts) {
    return (
      <>
        <h2 className="w-11/12 text-center md:text-start text-2xl font-bold text-gray-900 mt-10 mb-5 px-4 sm:px-0 mx-auto">
          {" "}
          Related Products
        </h2>
        <div className="bg-white mx-auto  w-full lg:w-10/12">
          <CardSkeleton />
        </div>
      </>
    );
  }
  return (
    <>
      <h2 className="w-11/12 text-center md:text-start  text-2xl font-bold text-gray-900 mt-10 mb-5 px-4 sm:px-0 mx-auto">
        {" "}
        Related Products
      </h2>

      <div className=" w-11/12 mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
        {product?.relatedProducts?.map((product) => (
          <Link
            href={`/products/${product?._id}`}
            key={product?._id}
            className="group"
          >
            <div className="aspect-h-1 aspect-w-1 w-full  md:h-2/3 overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
              <Image
                width={500}
                height={400}
                src={product?.mainImage}
                alt={product?.name}
                className="h-full w-full object-contain object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product?.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              ₹{product?.price}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default RelatedProducts;
