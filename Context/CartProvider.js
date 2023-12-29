"use client";
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { Context } from "./Context";
import toast from "react-hot-toast";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { user } = useContext(Context);
  const [cartdetails, setCartDetails] = useState({
    quantity: 1,
    size: "Medium",
  });

  // add item to cart
  const addItemToCart = async (e) => {
    try {
      const res = await axios.post("/api/cart", {
        userId: user?.data?._id,
        items: [
          {
            productId: e._id,
            image: e.mainImage,
            price: e.price,
            name: e.name,
            quantity: cartdetails.quantity,
            size: cartdetails.size,
          },
        ],
      });

      toast.success(res?.data?.message);
      setCartDetails({
        quantity: 1,
        size: "Medium",
      });
    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartdetails,
        setCartDetails,
        addItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
