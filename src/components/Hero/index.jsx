import React from "react";
import InputForm from "../InputForm";
import Credit from "../Credit";

export default function Hero({ title }) {
  return (
    <div className="section-padding-x pt-36 pb-16 text-dark-base">
      <div className="container max-w-screen-lg">
        <div className="flex flex-col items-center">
          <h1 className="text-center font-bold header-font-size mb-8">
            {title}
          </h1>
          <InputForm />
          <Credit />
        </div>
      </div>
    </div>
  );
}
