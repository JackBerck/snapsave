import React from "react";

export default function TiktokResultDisplay({ apiData }) {
  return (
    <div className="flex flex-col md:flex-row max-w-3xl min-h-52 border-4 border-dark-base md:gap-8 mb-4">
      <a
        href={apiData.data.play}
        className="group inline-block max-w-fit md:w-1/3"
      >
        <img
          src={apiData.data.cover}
          alt={
            apiData.data.title
              ? apiData.data.title
              : "Perhaps the entered link does not have a title? 🤔"
          }
          className="w-full h-full object-cover overflow-hidden"
        />
      </a>
      <div className="flex flex-col w-3/4 p-4 gap-4">
        {apiData.data.title ? (
          <p className="sub-header-font-size text-dark-base">
            {apiData.data.title.split(" ").length > 6
              ? `${apiData.data.title.split(" ").slice(0, 6).join(" ")}...`
              : apiData.data.title}
          </p>
        ) : (
          <p className="sub-header-font-size text-dark-base">
            Perhaps the entered link does not have a title? 🤔
          </p>
        )}
        <div className="flex gap-4">
          {apiData.data.play && (
            <a
              href={apiData.data.play}
              className="bg-primary text-white p-2 rounded-md"
            >
              Download SD
            </a>
          )}
          {apiData.data.hdplay && (
            <a
              href={apiData.data.hd}
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
