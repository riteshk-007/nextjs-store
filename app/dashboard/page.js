"use client";

import { AdminContext } from "@/Context/AdminProvider";
import { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js";
import { FaUser } from "react-icons/fa6";
import { BsFillBoxSeamFill } from "react-icons/bs";
import {
  LinearScale,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(LinearScale, CategoryScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const { totalUser, totalProduct } = useContext(AdminContext);

  const data = {
    labels: ["Users", "Products"],
    datasets: [
      {
        label: "# of Items",
        data: [totalUser?.length, totalProduct?.length],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
      },
    },
  };

  return (
    <div className=" p-5 flex flex-col items-center justify-center w-full bg-gray-200">
      <h2 className="text-3xl font-bold mb-4 text-gray-700">Admin Dashboard</h2>
      <div className="flex-grow flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 md:space-x-5">
        <div className=" w-52 bg-white shadow-lg rounded-lg p-5">
          <h3 className="text-2xl font-bold mb-4 text-gray-700">Users</h3>
          <FaUser />
          <p className="text-xl font-bold text-blue-600">{totalUser?.length}</p>
        </div>
        <div className=" w-52 bg-white shadow-lg rounded-lg p-5">
          <h3 className="text-2xl font-bold mb-4 text-gray-700">Products</h3>
          <BsFillBoxSeamFill />
          <p className="text-xl font-bold text-blue-600">
            {totalProduct?.length}
          </p>
        </div>
      </div>
      <div className="mt-3 bg-white shadow-lg rounded-lg p-5">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;
