"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import TableSkeleton from "../TableSkeleton";

const Products = () => {
  const [products, setproducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const Allproducts = async () => {
      const { data } = await axios.get("/api/allproducts");
      setproducts(data.data);
    };
    Allproducts();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <div className="w-full p-2 m-2 bg-white rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 p-1 m-2">
          Products
          <span className="text-sm text-gray-500 font-normal">
            ({products?.length})
          </span>
        </h1>
      </div>
      <div className="w-full p-2 m-2 bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-4 gap-4 p-4 bg-gray-800 rounded-lg text-white">
          <div className="font-bold">Image</div>
          <div className="font-bold">Product Name</div>
          <div className="font-bold">Price</div>
          <div className="font-bold">Category</div>
        </div>

        {currentItems.length ? (
          currentItems.map((item, index) => (
            <Link
              href={`/dashboard/products/${item?._id}`}
              key={item?._id}
              className={`w-full border grid md:grid-cols-4 text-sm gap-4 py-4 px-1 md:p-4 hover:bg-gray-200 transition-all duration-200 ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              }`}
            >
              <div className="mx-2">
                <Image
                  height={64}
                  width={100}
                  src={item?.mainImage}
                  alt={item?.name}
                  className="w-auto h-28 object-cover"
                />
              </div>
              <div className="text-gray-600 mx-2">
                <span>{item?.name}</span>
              </div>
              <div className="text-gray-600 mx-2">{item?.price}</div>
              <div className="text-sm text-gray-500 mx-2">{item?.category}</div>
            </Link>
          ))
        ) : (
          <TableSkeleton />
        )}

        <div className="flex justify-center mt-4">
          {pageNumbers.length > 1 &&
            pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => setCurrentPage(number)}
                className={`h-10 w-10 mr-1 flex justify-center items-center border rounded-full ${
                  currentPage === number ? "bg-blue-500 text-white" : ""
                }`}
              >
                {number}
              </button>
            ))}
        </div>
      </div>
    </>
  );
};

export default Products;
