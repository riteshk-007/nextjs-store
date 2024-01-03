"use client";
import { Context } from "@/Context/Context";
import Link from "next/link";
import { useContext, useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  const { user } = useContext(Context);
  const name = user?.data?.name.replace(/ .*/, "");
  return (
    <div className="w-full">
      <nav className="bg-white py-2 md:py-4 shadow border-t">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <Link href="/dashboard" className="font-bold text-xl text-black">
              Hi, {name} 👋
            </Link>
            <button
              onClick={() => setShow(!show)}
              className="border border-solid border-gray-600  px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 72 72"
              >
                <path d="M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 48 54.798 48 56 48zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 32 54.798 32 56 32zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 16 54.798 16 56 16z"></path>
              </svg>
            </button>
          </div>

          <div
            className={`md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 ${
              show ? "flex" : "hidden"
            } `}
          >
            <Link
              href="/dashboard"
              className="p-2 lg:px-4 md:mx-2 text-white rounded bg-black"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/create"
              className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Create
            </Link>
            <Link
              href="/dashboard/users"
              className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Users
            </Link>
            <Link
              href="/dashboard/products"
              className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Products
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
