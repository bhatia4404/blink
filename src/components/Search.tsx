import { useState } from "react";
import search from "../img/search.svg";
import { useNavigate } from "react-router-dom";
export function Search() {
  const navigate = useNavigate();
  const searchOptions = [
    { option: "About", path: "/about" },
    { option: "Careers", path: "/careers" },
    { option: "Security", path: "/security" },
    { option: "Terms & Conditions", path: "termsconditions" },
    { option: "Privacy Policy", path: "/policy" },
    { option: "Blog", path: "/blog" },
    { option: "Social Media", path: "/socialmedia" },
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
                el.option.toLowerCase().includes(search.toLowerCase())
              );
              setCurrentSearchOptions(filteredSearch);
            }}
            onClick={(e) => e.stopPropagation()}
          />
          <datalist id="search_options">
            {cuurentSearchOptions.map((el, i) => (
              <option
                value={el.option}
                key={`${i + 1}`}
                onClick={() => {
                  navigate(el.path);
                }}
              />
            ))}
          </datalist>
        </div>
      </button>
    </div>
  );
}
