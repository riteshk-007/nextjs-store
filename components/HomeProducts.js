"use client";
import { ProductContext } from "@/Context/CreateProduct";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import CardSkeleton from "./CardSkeleton";

const HomeProducts = ({ show }) => {
  const { products } = useContext(ProductContext);

  if (!products?.data) {
    return (
      <div
        className={`bg-white mx-auto ${show ? "w-full lg:w-10/12" : "w-full"}`}
      >
        <CardSkeleton />
      </div>
    );
  }
  return (
    <div>
      <div className={`bg-white mx-auto ${show ? "w-10/12" : "w-full"}`}>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-full lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
            {show
              ? products?.data
                  ?.slice(-4)
                  .map((product) => (
                    <Link
                      href={`/products/${product?._id}`}
                      key={product?._id}
                      className="group"
                    >
                      <div className="aspect-h-1 aspect-w-1 w-full  md:h-5/6 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <Image
                          width={500}
                          height={400}
                          src={product?.mainImage}
                          alt={product?.name}
                          className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                      </div>
                      <h3 className="mt-4 text-sm text-gray-700">
                        {product?.name}
                      </h3>
                      <p className="mt-1 text-lg font-medium text-gray-900">
                        ₹{product?.price}
                      </p>
                    </Link>
                  ))
                  .reverse()
              : products?.data?.map((product) => (
                  <Link
                    href={`/products/${product?._id}`}
                    key={product?._id}
                    className="group"
                  >
                    <div className="aspect-h-1 aspect-w-1 w-full  md:h-3/4 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <Image
                        width={300}
                        height={300}
                        src={product?.mainImage}
                        alt={product?.name}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">
                      {product?.name}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      ₹{product?.price}
                    </p>
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
