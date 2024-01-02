"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const Category = ({ params }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/category/${params}`);
      setData(res.data.data);
    };
    fetchData();
  }, [params]);
  console.log(data);
  return <div>category :{params}</div>;
};

export default Category;
