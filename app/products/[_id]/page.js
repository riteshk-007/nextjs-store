"use client";
import { CartContext } from "@/Context/CartProvider";
import { Context } from "@/Context/Context";
import RelatedProducts from "@/components/RelatedProducts";
import Skeleton from "@/components/Skeleton";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const Product = () => {
  const [product, setProduct] = useState({});

  const { _id } = useParams();
  const { cartdetails, setCartDetails, addItemToCart } =
    useContext(CartContext);
  const { user } = useContext(Context);
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`/api/product/${_id}`);
      setProduct(res.data.data);
    };
    fetchProduct();
  }, [_id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!product?.mainImage) return <Skeleton />;

  return (
    <div>
      <section className="overflow-hidden bg-white py-11 font-poppins ">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2 ">
              <div className="sticky top-0 z-30 overflow-hidden ">
                <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                  <Image
                    width={400}
                    height={400}
                    src={
                      product?.mainImage ? (
                        product.mainImage
                      ) : (
                        <div className="flex items-center justify-center lg:w-1/2  h-96 bg-gray-300 rounded  ">
                          <svg
                            className="w-10 h-10 text-gray-200 "
                            ariaHidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 18"
                          >
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                          </svg>
                        </div>
                      )
                    }
                    alt="product"
                    className="object-cover w-full lg:h-full "
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 ">
              <div className="lg:pl-20">
                <div className="mb-8 ">
                  <span className="text-lg font-medium text-rose-500 ">
                    {product?.category}
                  </span>
                  <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold  md:text-4xl">
                    {product?.name}
                  </h2>
                  <div className="flex items-center mb-6">
                    <ul className="flex mr-2">
                      <li>
                        <a href="#!">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-yellow-500  bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-yellow-500  bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-yellow-500  bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-yellow-500  bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                    <p className="text-xs  ">
                      (2 customer reviews)
                    </p>
                  </div>
                  <p className="max-w-md mb-8 text-gray-700 ">
                    {product?.description}
                  </p>
                  <p className="inline-block mb-8 text-4xl font-bold text-gray-700  ">
                    <span>₹ {product?.price}</span>
                    <span className="text-base font-normal text-gray-500 line-through  mx-1">
                      ₹ {product?.price * 3}
                    </span>
                  </p>
                </div>

                <div className="flex items-center mb-8">
                  <h2 className="w-16 text-xl font-bold ">
                    Size:
                  </h2>
                  <div className="flex flex-wrap mx-2 -mb-2">
                    <fieldset className="flex flex-wrap gap-3">
                      <legend className="sr-only">size</legend>
                      <select
                        value={cartdetails?.size}
                        onChange={(e) =>
                          setCartDetails({
                            ...cartdetails,
                            size: e.target.value,
                          })
                        }
                        className="py-3 px-4 pe-9 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        {product?.size?.map((size, index) => (
                          <option key={index} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </fieldset>
                  </div>
                </div>
                <div className="w-32 mb-8 ">
                  <label
                    htmlFor=""
                    className="w-full text-xl font-semibold text-gray-700 "
                  >
                    Quantity
                  </label>
                  <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                    <button
                      onClick={() => {
                        const newQuantity =
                          cartdetails.quantity === 1
                            ? 1
                            : cartdetails.quantity - 1;
                        setCartDetails({
                          ...cartdetails,
                          quantity: newQuantity,
                        });
                      }}
                      className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer   hover:text-gray-700  hover:bg-gray-400"
                    >
                      <span className="m-auto text-2xl font-thin">-</span>
                    </button>
                    <input
                      type="number"
                      className="flex base items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none   focus:outline-none text-md hover:text-black"
                      value={cartdetails.quantity}
                      readOnly
                    />
                    <button
                      onClick={() => {
                        const newQuantity = cartdetails.quantity + 1;
                        setCartDetails({
                          ...cartdetails,
                          quantity: newQuantity,
                        });
                      }}
                      className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer  hover:text-gray-700 hover:bg-gray-400"
                    >
                      <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap items-center -mx-4 ">
                  <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                    {user?.data ? (
                      <button
                        onClick={() => addItemToCart(product)}
                        className="flex items-center bg-black justify-center w-full p-3 text-gray-200 font-semibold border border-gray-500 rounded-md  hover:bg-gray-800 hover:border-gray-600 hover:text-gray-50"
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <Link
                        href="/loginpage"
                        className="flex items-center bg-black justify-center w-full p-3 text-gray-200 font-semibold border border-gray-500 rounded-md  hover:bg-gray-800 hover:border-gray-600 hover:text-gray-50"
                      >
                        Add to Cart
                      </Link>
                    )}
                  </div>
                  <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                    <button className="flex items-center bg-black justify-center w-full p-3 text-gray-200 font-semibold border border-gray-500 rounded-md  hover:bg-gray-800 hover:border-gray-600 hover:text-gray-50">
                      Add to wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RelatedProducts id={_id} />
    </div>
  );
};

export default Product;
