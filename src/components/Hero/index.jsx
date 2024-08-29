import React from "react";
import InputForm from "../InputForm";

export default function Hero() {
  return (
    <div className="section-padding-x pt-44 pb-16">
      <div className="container max-w-screen-lg">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-center font-bold header-font-size text-dark-base">
            Download video, audio, dan foto dengan mudah
          </h1>
          <InputForm />
        </div>
      </div>
    </div>
  );
}
