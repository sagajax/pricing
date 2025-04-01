import React from "react";

const Heading = () => {
  return (
    <div className="w-full text-center py-8 sm:py-12 lg:py-16">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold px-4 sm:px-6 mb-3 sm:mb-4">
        Choose the plan that's right for your team
      </h1>
      <p className="text-lg sm:text-xl lg:text-2xl font-semibold px-4 sm:px-6 text-gray-700">
        Pay by the month or the year, and cancel at any time.
      </p>
    </div>
  );
};

export default Heading;