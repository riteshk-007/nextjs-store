const SInglePRoductSkeleton = () => {
  return (
    <div
      className="
     w-full h-full flex items-center justify-center p-3 my-5
"
    >
      <div
        role="status"
        className="space-y-8 w-full md:w-9/12 mx-auto animate-pulse md:space-y-0 md:space-x-8 flex-col rtl:space-x-reverse md:flex md:items-center"
      >
        <div className="flex  items-center justify-center lg:w-2/5  h-96 bg-gray-300 rounded  ">
          <svg
            className="w-10 h-10 text-gray-200 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="w-full grid md:grid-cols-2 grid-rows-1 gap-3 ">
          <div className=" h-6 md:h-12 bg-gray-200 rounded  w-full  my-4"></div>
          <div className=" h-6 md:h-12 bg-gray-200 rounded  w-full  my-4"></div>
          <div className=" h-6 md:h-32 bg-gray-200 rounded  w-full  my-4"></div>
          <div className=" h-6 md:h-12 bg-gray-200 rounded  w-full  my-4"></div>
          <div className=" mt-3 h-6 md:h-12 bg-gray-200 rounded  w-full  my-4"></div>
          <div className=" mt-3 h-6 md:h-12 bg-gray-200 rounded  w-full  my-4"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default SInglePRoductSkeleton;
