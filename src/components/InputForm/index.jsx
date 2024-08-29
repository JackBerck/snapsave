import React, { useState } from "react";
import InputField from "./InputField";
import ResultDisplay from "./ResultDisplay";
import useApiFetcher from "./useApiFetcher";

export default function InputForm() {
  const [inputValue, setInputValue] = useState("");
  const [encodedValue, setEncodedValue] = useState("");

  const { apiData, loading, error } = useApiFetcher(encodedValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      setEncodedValue(encodeURIComponent(inputValue));
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <InputField
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        inputValue={inputValue}
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {apiData && <ResultDisplay apiData={apiData} />}
    </>
  );
}
