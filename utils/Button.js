"use client";
import { useState } from "react";

const Button = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <button
      disabled={isLoading}
      className={`flex w-full items-center justify-center rounded-md border border-transparent bg-[#2f4550] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#2f4550] ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {isLoading ? "Processing..." : " Proceed to checkout"}
    </button>
  );
};

export default Button;
