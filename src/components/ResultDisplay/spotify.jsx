import React from "react";

export default function SpotifyResultDisplay({ apiData }) {
  function formatDateToUs(date) {
    const dateObject = new Date(date);
    return dateObject.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <div className="flex flex-col md:flex-row max-w-3xl min-h-52 border-4 border-dark-base md:gap-8 mb-4">
      <a href={apiData.link} className="group inline-block max-w-fit md:w-1/3">
        <img
          src={apiData.metadata.cover}
          alt={
            apiData.title
              ? apiData.title
              : "Maybe the entered link doesn't have a title? 🤔"
          }
          className="w-full h-full object-cover overflow-hidden"
        />
      </a>
      <div className="flex flex-col md:w-3/4 p-4 gap-4 relative">
        <div className="">
          <p className="down-font-size text-dark-base">
            {apiData.metadata.artists}
          </p>
          <p className="sub-header-font-size font-semibold text-dark-base">
            {apiData.metadata.title}
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href={apiData.link}
            className="bg-primary text-white p-2 rounded-md"
          >
            Download
          </a>
        </div>
        <p className="normal-font-size text-dark-base">
          Album: {apiData.metadata.album}
        </p>
        <p className="small-font-size absolute top-2 right-2">
          {formatDateToUs(apiData.metadata.releaseDate)}
        </p>
      </div>
    </div>
  );
}
