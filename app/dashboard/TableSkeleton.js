const TableSkeleton = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-3">
      <div className="w-full flex flex-col ">
        <div className=" h-8 md:h-16 bg-gray-300 rounded  w-full"></div>
        <div className=" h-8 md:h-16 bg-gray-100 rounded  w-full"></div>
        <div className=" h-8 md:h-16 bg-gray-300 rounded  w-full"></div>
        <div className=" h-8 md:h-16 bg-gray-100 rounded  w-full"></div>
        <div className=" h-8 md:h-16 bg-gray-300 rounded  w-full"></div>
        <div className=" h-8 md:h-16 bg-gray-100 rounded  w-full"></div>
        <div className=" h-8 md:h-16 bg-gray-300 rounded  w-full"></div>
        <div className=" h-8 md:h-16 bg-gray-100 rounded  w-full"></div>
        <div className=" h-8 md:h-16 bg-gray-300 rounded  w-full"></div>
        <div className=" h-8 md:h-16 bg-gray-100 rounded  w-full"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default TableSkeleton;
