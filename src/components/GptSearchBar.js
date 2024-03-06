import React, { useRef } from "react";
import { lang } from "../utils/constants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const langSelected = useSelector((store) => store.config.lang);

  const handleSearch = async () => {
    const searchQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(chatCompletion);
  };
  return (
    <div className="pt-[5%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="m-4 p-4 rounded-md col-span-10"
          placeholder={lang[langSelected].gptSearchPlaceholder}
        />
        <button
          className="text-white px-4 m-4 py-2 bg-red-700 col-span-2 rounded-md"
          onClick={handleSearch}
        >
          {lang[langSelected].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
