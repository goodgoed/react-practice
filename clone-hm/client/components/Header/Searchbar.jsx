import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import {
  InstantSearch,
  connectHighlight,
  connectSearchBox,
  connectStateResults,
  connectHits,
} from "react-instantsearch-dom";

const Highlight = ({ highlight, attribute, hit }) => {
  const parsedHit = highlight({
    highlightProperty: "_highlightResult",
    attribute,
    hit,
  });

  return (
    <div className="underline text-xs">
      {parsedHit.map((part, index) =>
        part.isHighlighted ? (
          <span key={index} className="font-bold">
            {part.value}
          </span>
        ) : (
          <span key={index}>{part.value}</span>
        )
      )}
    </div>
  );
};
const CustomHighlight = connectHighlight(Highlight);

const Hits = ({ hits }) => {
  return (
    <ol>
      {hits.map((hit) => {
        return (
          <li
            key={hit.objectID}
            className="relative hover:bg-gray-300 py-4 px-4"
          >
            <CustomHighlight attribute="name" hit={hit} />
          </li>
        );
      })}
    </ol>
  );
};

const CustomHits = connectHits(Hits);

const SearchBox = ({ currentRefinement, refine }) => (
  <>
    <input
      type="text"
      placeholder="제품 검색"
      className="bg-[#faf9f8] outline-none placeholder:text-[#222] text-xs w-full focus:outline-transparent"
      value={currentRefinement}
      onChange={(e) => refine(e.currentTarget.value)}
    />
    <button className="absolute left-0 top-3">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="text-[#222] text-2xl"
      />
    </button>
  </>
);

const CustomSearchBox = connectSearchBox(SearchBox);

const isTyping = (searchState) => {
  if (!searchState) return false;

  if (Object.keys(searchState).length === 0 || searchState?.query === "")
    return false;

  return true;
};

const Results = connectStateResults(
  ({ searchState, searchResults, children }) => {
    return !isTyping(searchState) ? null : searchResults &&
      searchResults.nbHits !== 0 ? (
      children
    ) : (
      <div className="text-xs py-4 px-4">
        No results have been found for {searchState.query}.
      </div>
    );
  }
);

const Searchbar = () => {
  const searchClient = instantMeiliSearch(process.env.SEARCH_HOST, "");

  return (
    <InstantSearch indexName="product" searchClient={searchClient}>
      <div className="relative ml-auto w-[11vw] mr-8 border-b-[1px] border-[#222] py-2 pl-8 pr-4">
        <CustomSearchBox />
        <div className="absolute w-full left-0 top-[2.7rem] bg-white z-[100]">
          <Results>
            <CustomHits />
          </Results>
        </div>
      </div>
    </InstantSearch>
  );
};

export default Searchbar;
