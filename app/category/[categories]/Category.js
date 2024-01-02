"use client";
import CardSkeleton from "@/components/CardSkeleton";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Category = ({ params }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/category/${params}`);
      setData(res.data.data);
    };
    fetchData();
    window.scrollTo(0, 0);
  }, [params]);

  if (!data[0]?.mainImage) {
    return (
      <div className="w-full lg:w-11/12 mx-auto my-4">
        <CardSkeleton />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-96 bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col items-center justify-center w-full h-full bg-no-repeat bg-cover bg-hero-pattern">
          <h1 className="text-4xl font-bold text-white">{params}</h1>
          <p className="text-xl font-medium text-white">
            For unique and stylish clothing in the collection you can select the
            best one for you.
          </p>
        </div>
      </div>
      <div
        className="mx-auto w-11/12 px-2 py-8 sm:px-6 sm:py-12 lg:px-8 text-gray-500 text-sm"
        style={{ maxWidth: "90rem" }}
      >
        Home <span className="mx-2">/</span> {params}
      </div>
      <div className="w-full lg:w-11/12 mx-auto my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
        {data?.map((product) => (
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

export default Category;
