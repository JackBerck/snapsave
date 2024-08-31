import React from "react";

export default function InputField({ handleSubmit, handleChange, inputValue }) {
  return (
    <form
      className="flex flex-col md:flex-row items-center justify-between w-full md:w-3/5 gap-4 mb-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Masukkan URL video, audio, atau foto"
        className="w-full bg-white-base border-4 border-dark-base p-3 normal-font-size outline-none md:w-3/5"
        value={inputValue}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="w-full bg-primary text-white p-3 md:w-2/5"
      >
        Download
      </button>
    </form>
  );
}
