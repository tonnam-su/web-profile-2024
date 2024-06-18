import React from "react";

type Props = {};

const Education = (props: Props) => {
  return (
    <div className="bg-blue-100 h-full p-4 rounded-xl">
      <h1 className="text-xl font-bold pb-4">Education</h1>
      <div className="container mx-auto p-6">
        <div className="relative border-l-4 border-blue-500">
          <div className="mb-5 ml-4">
            <div className="absolute -left-2 mt-1.5 h-3 w-3 rounded-full border border-white bg-blue-500"></div>
            <div className="rounded-lg bg-white p-2 shadow-md">
              <time className="text-sm font-semibold text-gray-500">
                January 2024
              </time>
              <h2 className="mb-2 text-sm font-semibold">
                Walailak University
              </h2>
            </div>
          </div>
          <div className="mb-5 ml-4">
            <div className="absolute -left-2 mt-1.5 h-3 w-3 rounded-full border border-white bg-blue-500"></div>
            <div className="rounded-lg bg-white p-2 shadow-md">
              <time className="text-sm font-semibold text-gray-500">
                March 2022
              </time>
              <h2 className="mb-2 text-sm font-semibold">
                Walailak University
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
