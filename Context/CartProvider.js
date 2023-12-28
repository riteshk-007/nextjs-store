"use client";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { Context } from "./Context";
import toast from "react-hot-toast";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { user } = useContext(Context);
  const [productId, setProductId] = useState(null);
  const [value, setValue] = useState(1);
  const [size, setSize] = useState("Medium");
  const [usersCart, setUserCart] = useState(null);

  // add item to cart
  const addItemToCart = async () => {
    try {
      const res = await axios.post("/api/cart", {
        userId: user?.data?._id,
        items: [
          {
            productId: productId,
            quantity: value,
            size: size,
          },
        ],
      });
      setValue(1);
      setProductId(null);
      setSize("Medium");
      toast.success(res?.data?.message);
    } catch (error) {
      console.log(error);
      toast.error(res?.data?.message);
    }
  };

  // get user cart data
  useEffect(() => {
    const getCart = async () => {
      try {
        const res = await axios.post("/api/cart-item", {
          userId: user?.data?._id,
        });
        setUserCart(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (user?.data?._id) {
      getCart();
    }
  }, [user, setUserCart]);
  return (
    <CartContext.Provider
      value={{
        productId,
        setProductId,
        value,
        setValue,
        addItemToCart,
        size,
        setSize,
        usersCart,
        setUserCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
