"use client";
import axios from "axios";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SInglePRoductSkeleton from "../../SInglePRoductSkeleton";

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const route = useRouter();

  // get product details
  useEffect(() => {
    const GetProductDetails = async () => {
      const res = await axios.get(`/api/allproducts/${params.id}`);
      setProduct(res?.data?.data);
    };
    GetProductDetails();
  }, [params]);

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Handle update product details
  const UdateProducts = async () => {
    const res = await axios.put(`/api/allproducts/${params.id}`, {
      product,
    });
    route.push("/dashboard/products");
    toast.success("Product updated successfully");
    return res;
  };

  //  Handle delete product
  const DeleteProduct = async () => {
    const res = await axios.delete(`/api/allproducts/${params.id}`);
    route.push("/dashboard/products");
    toast.success("Product deleted successfully");
    return res;
  };

  if (!product?.mainImage) return <SInglePRoductSkeleton />;
  return (
    <div className="w-full h-full flex items-center justify-center flex-col bg-gray-100 relative">
      <h1 className="w-full text-center my-5">
        <span className="text-2xl md:text-4xl font-bold text-gray-900">
          Edit Product OR Delete Product
        </span>
      </h1>
      <div className="flex flex-col items-center justify-center  mt-3">
        <label
          htmlFor="description"
          className=" w-full flex items-start justify-start  text-gray-700 text-sm md:text-base font-medium"
        >
          Image:
        </label>

        <Image
          src={product?.mainImage}
          width="500"
          height="500"
          alt="product image"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          UdateProducts();
        }}
        className="w-full lg:w-11/12 mx-auto md:grid grid-cols-2 grid-rows-1 gap-3 mt-5  p-4"
      >
        <div className="flex flex-col items-center justify-center mt-3">
          <label
            htmlFor="name"
            className=" w-full flex items-start justify-start  text-gray-700 text-sm md:text-base font-medium"
          >
            Product Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full  border border-gray-300 p-2 rounded-md mt-2"
            required
            placeholder="Enter product name"
            value={product?.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col items-center justify-center  mt-3">
          <label
            htmlFor="price"
            className=" w-full flex items-start justify-start  text-gray-700 text-sm md:text-base font-medium"
          >
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="w-full border  border-gray-300 p-2 rounded-md mt-2"
            required
            placeholder="Enter product price in ₹"
            value={product?.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col items-center justify-center  mt-3">
          <label
            htmlFor="description"
            className=" w-full flex items-start justify-start  text-gray-700 text-sm md:text-base font-medium"
          >
            Description:
          </label>
          <textarea
            type="text"
            id="description"
            name="description"
            className="w-full border border-gray-300 p-2 rounded-md mt-2"
            required
            placeholder="Enter product description"
            rows="4"
            cols="50"
            value={product?.description}
            onChange={handleInputChange}
            style={{ resize: "none" }}
          ></textarea>
        </div>
        <div className="flex flex-col items-center justify-center  mt-3">
          <label
            htmlFor="description"
            className=" w-full flex items-start justify-start  text-gray-700 text-sm md:text-base font-medium"
          >
            Category:
          </label>
          <select
            name="category"
            id="category"
            className="w-full border border-gray-300 p-2 rounded-md mt-2"
            placeholder="Select category"
            required
            value={product?.category}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div className=" flex flex-col items-center justify-center  mt-3">
          <button
            type="submit"
            className="w-full bg-gray-900 text-white p-2 rounded-md"
          >
            Update Product
          </button>
        </div>
        <div className=" flex flex-col items-center justify-center  mt-3">
          <button
            type="button"
            onClick={DeleteProduct}
            className="w-full bg-red-900 text-white p-2 rounded-md mt-2"
          >
            {" "}
            Delete Product{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Product;
