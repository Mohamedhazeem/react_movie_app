import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="flex sm:flex-row flex-col sm:justify-between justify-center items-center p-5 bg-slate-500">
      <p className="lg:text-lg font-bold">Movies DB</p>
      <div className="flex sm:flex-row flex-col items-center sm:gap-4 gap-1">
        <input
          className="rounded-xl px-2 focus:outline-none border-neutral-800 border-2"
          type="search"
          placeholder="Quick Search"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          onKeyDown={(key) => {
            if (key.key == "Enter") setSearchText("");
          }}
        ></input>
        <Link to={"/"}>Home</Link>
        <Link to={"/trending"}>Trending</Link>
      </div>
    </div>
  );
};
