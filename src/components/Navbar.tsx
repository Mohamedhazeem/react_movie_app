import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { search } from "../api/search";
import { searchResult, searchType } from "../api/fetchTypes";

export const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState<searchType>();

  const navigate = useNavigate();

  const SearchData = () => {
    if (searchText == null) return;

    search(searchText)
      .then((data: searchType) => {
        console.log(data.results.length);
        if (data.results.length > 0) {
          const filteredResults = data.results.filter(
            (search: searchResult) => {
              return (
                search.media_type === "movie" || search.media_type === "tv"
              );
            }
          );
          console.log("running");
          if (filteredResults.length > 0) {
            setSearchData({ ...data, results: filteredResults });
          } else {
            navigate("/not_found");
          }
        } else {
          navigate("/not_found");
        }
      })
      .catch((err) => console.error(err));
    console.log(searchData);
  };

  return (
    <div className="flex sm:flex-row flex-col sm:justify-between justify-center items-center p-5 bg-slate-500">
      <p className="lg:text-lg font-bold">Movies DB</p>
      <div className="flex sm:flex-row flex-col items-center sm:gap-4 gap-1">
        <input
          className="appearance-none rounded-xl px-2 outline-none border-neutral-800 border-2"
          type="text"
          placeholder="Quick Search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchText}
          onKeyDown={(key) => {
            if (key.key == "Enter") {
              SearchData();
              console.log(searchText);

              setSearchText("");
            }
          }}
        ></input>
        <Link to={"/"}>Home</Link>
        <Link to={"/trending"}>Trending</Link>
      </div>
    </div>
  );
};
