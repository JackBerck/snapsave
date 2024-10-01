import React from "react";

export default function YoutubeResultDisplay({ apiData }) {
  return (
    <div className="flex flex-col md:flex-row max-w-3xl  items-center border-4 border-dark-base md:gap-8 mb-4">
      <div className="flex flex-col p-4 gap-4">
        <div className="flex gap-4">
          <a
            href={apiData.url}
            className="bg-primary text-white p-2 rounded-md"
            download
          >
            Download Video
          </a>
        </div>
      </div>
    </div>
  );
}
