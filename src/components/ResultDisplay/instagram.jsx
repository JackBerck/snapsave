import React from "react";

export default function InstagramResultDisplay({ apiData }) {
  return (
    <div className="flex flex-col md:flex-row max-w-3xl min-h-52 border-4 border-dark-base md:gap-8 mb-4">
      <a
        href={apiData.data[0].url}
        className="group inline-block max-w-fit md:w-1/3"
      >
        <img
          src={apiData.data[0].thumbnail}
          alt="Mungkin tautan yang diinputkan tidak memiliki judul? 🤔"
          className="w-full h-full object-cover overflow-hidden"
        />
      </a>
      <div className="flex flex-col w-3/4 p-4 gap-4">
        <p className="sub-header-font-size text-dark-base">
          Mungkin tautan yang diinputkan tidak memiliki judul? 🤔
        </p>
        <div className="flex gap-4">
          <a
            href={apiData.data[0].url}
            className="bg-primary text-white p-2 rounded-md"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
