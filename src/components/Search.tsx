import { useState } from "react";
import search from "../img/search.svg";
export function Search() {
  const searchOptions = [
    "About",
    "Careers",
    "Security",
    "Terms & Conditions",
    "Privacy Policy",
    "Blog",
    "Social Media",
  ];
  const [cuurentSearchOptions, setCurrentSearchOptions] =
    useState(searchOptions);
  const [visibleSearch, setVisibleSearch] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setVisibleSearch(!visibleSearch)}>
        <img src={search} />
        <div className="">
          <input
            type="text"
            placeholder="Search..."
            className={`absolute bg-blue2 top-[40px] h-[30px] outline-0 pl-3 pr-3 pt-2 pb-2 shadow-sm shadow-blue7 text-blue8 -left-[20px]
            ${!visibleSearch ? "hidden" : ""}`}
            list="search_options"
            onChange={function (e) {
              const search = e.target.value;
              const filteredSearch = searchOptions.filter((el) =>
                el.toLowerCase().includes(search.toLowerCase())
              );
              setCurrentSearchOptions(filteredSearch);
            }}
            onClick={(e) => e.stopPropagation()}
          />
          <datalist id="search_options">
            {cuurentSearchOptions.map((el) => (
              <option value={el} />
            ))}
          </datalist>
        </div>
      </button>
    </div>
  );
}
