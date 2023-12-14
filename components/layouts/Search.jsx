
import React from "react";

const Search = () => {
  return (
    <form className="flex flex-auto items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-2/4">
      <input
        className="flex-grow flex-row appearance-none border border-gray-200 bg-gray-100 rounded-md mr-2 py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400" 
        type="text"
        placeholder="کلمه کلیدی خود را وارد کنید"
        required
      />
      <button
        type="button"
        className="px-4 py-2 mr-5 inline-block text-white border border-transparent bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        جستجو
      </button>
    </form>
  );
};

export default Search;