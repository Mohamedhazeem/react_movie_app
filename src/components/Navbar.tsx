import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { search } from "../api/search";
import { searchType } from "../api/fetchTypes";

export const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState<searchType>();

  const navigate = useNavigate();

  const SearchData = () => {
    const v = search(searchText);
    console.log(v);
    search(searchText)
      .then((data: searchType) => {
        if (data.results.length > 0) {
          data.results.map((search) => {
            if (search.media_type == ("movie" || "tv")) {
              setSearchData(data);
            }
          });
        } else {
          console.log("not_found");
          navigate("/not_found");
        }
      })
      .catch((err) => console.error(err)); //need to add not found page
  };

  return (
    <div className="flex sm:flex-row flex-col sm:justify-between justify-center items-center p-5 bg-slate-500">
      <p className="lg:text-lg font-bold">Movies DB</p>
      <div className="flex sm:flex-row flex-col items-center sm:gap-4 gap-1">
        <input
          className="rounded-xl px-2 focus:outline-none border-neutral-800 border-2"
          type="search"
          placeholder="Quick Search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchText}
          onKeyDown={(key) => {
            if (key.key == "Enter") {
              SearchData();
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
