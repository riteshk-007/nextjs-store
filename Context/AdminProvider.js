"use client";

import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [totalUser, setTotalUser] = useState([]);
  const [totalProduct, setTotalProduct] = useState([]);

  useEffect(() => {
    const AllUser = async () => {
      const { data } = await axios.get("/api/alluser");
      setTotalUser(data.data);
    };
    AllUser();
  }, []);

  useEffect(() => {
    const Allproducts = async () => {
      const { data } = await axios.get("/api/allproducts");
      setTotalProduct(data.data);
    };
    Allproducts();
  }, []);
  return (
    <AdminContext.Provider value={{ totalUser, totalProduct }}>
      {children}
    </AdminContext.Provider>
  );
};
export default AdminProvider;
