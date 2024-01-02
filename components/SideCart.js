import React, { Fragment, useContext, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Context } from "@/Context/Context";
import Image from "next/image";
import axios from "axios";
import Button from "@/utils/Button";

const SideCart = ({ setIsCartOpen, isCartOpen }) => {
  const { user } = useContext(Context);
  const [usersCart, setUserCart] = useState([]);
  const totalPrice = usersCart?.reduce(
    (total, item) =>
      total +
      item?.items?.reduce(
        (total, item) => total + item?.price * item?.quantity,
        0
      ),
    0
  );

  // get user cart data
  useEffect(() => {
    const getCart = async () => {
      try {
        const res = await axios.post("/api/cart-item", {
          userId: user?.data?._id,
        });
        if (res?.data?.cartItem?.length === 0) {
          return null;
        }

        setUserCart(res?.data?.cartItem);
      } catch (error) {
        console.log(error);
      }
    };
    user && getCart();
  }, [user]);

  // remove item from cart
  const removeItem = async (productId) => {
    try {
      const res = await axios.delete("/api/cart", {
        data: { id: productId },
      });
      if (res.status === 200) {
        setUserCart(usersCart?.filter((item) => item?._id !== productId));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Transition.Root as={Fragment} show={isCartOpen}>
      <Dialog
        as="div"
        className="relative z-50"
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setIsCartOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          {user?.data ? (
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {usersCart?.length ? (
                                usersCart
                                  ?.map((user, userIndex) => {
                                    return (
                                      <React.Fragment key={userIndex}>
                                        {user?.items?.map((item) => {
                                          return (
                                            <>
                                              <li
                                                key={item?._id}
                                                className="flex py-6"
                                              >
                                                <Link
                                                  href={`/products/${item?.productId}`}
                                                  className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md"
                                                >
                                                  <Image
                                                    height={200}
                                                    width={200}
                                                    src={item?.image}
                                                    alt={item?.name}
                                                    className="h-full w-full object-contain object-center"
                                                  />
                                                </Link>

                                                <div className="ml-4 flex flex-1 flex-col">
                                                  <div>
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                      <h3>
                                                        <a href={item?.href}>
                                                          {item?.name}
                                                        </a>
                                                      </h3>

                                                      <p className="ml-4">
                                                        ₹{item?.price}
                                                      </p>
                                                    </div>
                                                  </div>
                                                  <p className="mt-4 text-[12px] text-gray-500">
                                                    {item?.size}
                                                  </p>
                                                  <div className="flex flex-1 items-end justify-between text-sm">
                                                    <p className="text-gray-500">
                                                      Qty {item?.quantity}
                                                    </p>

                                                    <div className="flex">
                                                      <button
                                                        onClick={() =>
                                                          removeItem(user?._id)
                                                        }
                                                        type="button"
                                                        className="font-medium text-[#2f4550] hover:text-[#2f4550]"
                                                      >
                                                        Remove
                                                      </button>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                            </>
                                          );
                                        })}
                                      </React.Fragment>
                                    );
                                  })
                                  .reverse()
                              ) : (
                                <>
                                  <div className="flex justify-center items-center h-40">
                                    {" "}
                                    <p className="text-lg font-medium text-gray-900">
                                      Cart is empty
                                    </p>
                                  </div>
                                </>
                              )}
                            </ul>
                          ) : (
                            <div className="flex justify-center items-center h-40">
                              {" "}
                              <p className="text-lg font-medium text-gray-900">
                                Login to view cart
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      {user?.data && (
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>₹ {totalPrice}.00</p>
                        </div>
                      )}
                      {user?.data && (
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                      )}
                      <div className="mt-6">
                        {user?.data ? (
                          <div
                            className={`w-full mx-auto ${
                              totalPrice <= 0
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            }`}
                          >
                            <Button />
                          </div>
                        ) : (
                          <Link
                            href="/loginpage"
                            onClick={() => setIsCartOpen(false)}
                            className="flex items-center justify-center rounded-md border border-transparent bg-[#2f4550] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#2f4550]"
                          >
                            Login to View Cart
                          </Link>
                        )}
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <Link
                            href="/products"
                            className="font-medium text-[#2f4550] hover:text-[#2f4550]"
                            onClick={() => setIsCartOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SideCart;
