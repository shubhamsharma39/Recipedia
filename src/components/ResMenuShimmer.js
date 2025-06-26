import React from "react";

const ResMenuShimmer = () => {
  return (
    <div className="w-full px-4 py-3 xl:px-[280px] lg:px-[170px] md:px-[100px]">
      {/* restaurant info skeleton */}
      <div className="h-[245px] w-full bg-[#1D5C76]/40 rounded-xl animate-pulse" />

      {/* accordian skeletons */}
      {[...Array(5)].map((_, idx) => (
        <div
          key={idx}
          className="h-[72px] bg-[#1D5C76]/40 border rounded-2xl my-2 animate-pulse"
        />
      ))}
    </div>
  );
};

export default ResMenuShimmer;
