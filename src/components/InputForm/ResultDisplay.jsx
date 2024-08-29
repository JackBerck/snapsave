import React from "react";

export default function ResultDisplay({ apiData }) {
  return (
    <div className="flex flex-col md:flex-row max-w-3xl max-h-52 border-4 border-dark-base gap-8">
      <a href={apiData.sd} className="group inline-block max-w-fit w-1/3">
        <img
          src={apiData.thumbnail}
          alt={apiData.title}
          className="w-full h-full object-cover overflow-hidden"
        />
      </a>
      <div className="flex flex-col w-3/4 p-4 gap-4">
        {apiData.title ? (
          <p className="sub-header-font-size text-dark-base">
            {apiData.title.split(" ").length > 6
              ? `${apiData.title.split(" ").slice(0, 6).join(" ")}...`
              : apiData.title}
          </p>
        ) : (
          <p className="sub-header-font-size text-dark-base">Video Facebook</p>
        )}
        <div className="flex gap-4">
          {apiData.sd && (
            <a
              href={apiData.sd}
              className="bg-primary text-white p-2 rounded-md"
            >
              Download SD
            </a>
          )}
          {apiData.hd && (
            <a
              href={apiData.hd}
              className="bg-primary text-white p-2 rounded-md"
            >
              Download HD
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
