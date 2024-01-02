"use client";
import { useParams } from "next/navigation";
import Category from "./Category";

const Cate = () => {
  const params = useParams();
  return (
    <div>
      <Category params={params.categories} />
    </div>
  );
};

export default Cate;
