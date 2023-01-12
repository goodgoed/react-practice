import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Searchbar = () => {
  return (
    <div className="relative w-[11vw] mr-[3vw] border-b-[1px] border-[#222] py-2 px-8">
      <input
        type="text"
        placeholder="제품 검색"
        className="bg-[#faf9f8] placeholder:text-[#222] text-xs w-[5vw] focus:outline-transparent"
      />
      <button className="absolute left-0 top-3">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-[#222] text-2xl"
        />
      </button>
    </div>
  );
};

export default Searchbar;
