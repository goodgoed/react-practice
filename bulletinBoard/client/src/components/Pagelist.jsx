import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "react-feather";

const Pagelist = ({ currentPage, setCurrentPage, totalPage }) => {
  const leftDisabled = currentPage === 1 ? true : false;
  const rightDisabled = currentPage === totalPage ? true : false;

  const currentSet = Math.trunc(currentPage / 10);
  const lastPage =
    Math.trunc(totalPage / 10) === 0
      ? totalPage % 10
      : Math.trunc(totalPage / 10);

  const handleClick = (e) => {
    const dir = e.target.parentNode.name;
    switch (dir) {
      case "double-left":
        setCurrentPage((prev) => (prev - 10 > 0 ? prev - 10 : 1));
        break;
      case "left":
        setCurrentPage((prev) => prev - 1);
        break;
      case "right":
        break;
      case "double-right":
        break;
      default:
        break;
    }
  };

  return (
    <div onClick={handleClick} className="flex items-center">
      <button name="double-left" disabled={leftDisabled}>
        <ChevronsLeft className="text-gray-400" />
      </button>
      <button name="left" disabled={leftDisabled}>
        <ChevronLeft className="text-gray-400" />
      </button>

      {Array.from({ length: lastPage }, (_, i) => {
        return (
          <button
            key={i}
            className={`rounded-full py-1 px-3 mx-3 ${
              currentPage === i + 1 + currentSet * 10
                ? "bg-navy-400 text-white"
                : ""
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentPage(i + 1 + currentSet * 10);
            }}
            disabled={currentPage === i + 1 + currentSet * 10}
          >
            {i + 1}
          </button>
        );
      })}

      <button name="right" disabled={rightDisabled}>
        <ChevronRight className="text-gray-400" />
      </button>
      <button name="double-right" disabled={rightDisabled}>
        <ChevronsRight className="text-gray-400" />
      </button>
    </div>
  );
};

export default Pagelist;
