import { useEffect, useState } from "react";
import { Link, Outlet, json, useNavigate } from "react-router-dom";
import { search } from "../api/search";
import { searchResult, searchType } from "../api/fetchTypes";

export const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState<searchType | null>({
    page: 0,
    results: [],
  });
  useEffect(() => {
    const data = JSON.parse(
      sessionStorage.getItem("search") || "{}"
    ) as searchType;

    if (data.results && data.results.length > 0) {
      setSearchData(data);
    }
  }, []);

  const navigate = useNavigate();

  const SearchData = () => {
    if (searchText == null) {
      return;
    }
    search(searchText)
      .then((data: searchType) => {
        if (data.results.length > 0) {
          const filteredResults = data.results.filter(
            (search: searchResult) => {
              return (
                search.media_type === "movie" || search.media_type === "tv"
              );
            }
          );
          if (filteredResults.length > 0) {
            setSearchData({ ...data, results: filteredResults });
            sessionStorage.clear();
            sessionStorage.setItem(
              "search",
              JSON.stringify({ ...data, results: filteredResults })
            );
            navigate("/searchresults");
          } else {
            navigate("/not_found");
          }
        } else {
          navigate("/not_found");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
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
              }
            }}
          ></input>
          <Link to={"/"}>Home</Link>
          <Link to={"/trending"}>Trending</Link>
        </div>
      </div>
      <Outlet context={searchData} />
    </>
  );
};
