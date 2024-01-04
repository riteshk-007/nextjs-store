"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import TableSkeleton from "../TableSkeleton";

const User = () => {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const AllUser = async () => {
      const { data } = await axios.get("/api/alluser");
      setUser(data.data);
    };
    AllUser();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = user.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(user.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="w-full p-2 m-2 bg-white rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 p-1 m-2">
          Users
          <span className="text-sm text-gray-500 font-normal">
            ({user.length})
          </span>
        </h1>
      </div>
      <div className="w-full p-2 m-2 bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-3 gap-4 p-4 bg-gray-800 rounded-lg text-white">
          <div className="font-bold">Name</div>
          <div className="font-bold">Email</div>
          <div className="font-bold">Role</div>
        </div>

        {currentItems.length ? (
          currentItems.map((item, index) => (
            <div
              key={item?._id}
              className={`w-full border grid  md:grid-cols-3 text-sm gap-4 py-4 px-1 md:p-4 hover:bg-gray-200 transition-all duration-200  ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              }`}
            >
              <div className="text-gray-600 mx-2">{item?.name}</div>
              <div className="text-gray-600 mx-2">{item?.email}</div>
              <div className="text-sm text-gray-500 mx-2">
                {item?.isAdmin ? "Admin" : "User"}
              </div>
            </div>
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
                  currentPage === number ? "text-white bg-blue-500" : ""
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

export default User;
