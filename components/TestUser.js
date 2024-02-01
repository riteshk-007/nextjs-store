import React from "react";

const TestUser = () => {
  return (
    <div className="md:w-72 mx-auto flex flex-col text-white mt-5 bg-gray-800 rounded-lg p-4 shadow-lg text-center">
      <h2 className="text-base font-bold mb-1">Test Account Details</h2>
      <p className="text-sm">
        Email: <span className="font-semibold">test@gmail.com</span>
      </p>
      <p className="text-sm">
        Password: <span className="font-semibold">test4321</span>
      </p>
    </div>
  );
};

export default TestUser;
