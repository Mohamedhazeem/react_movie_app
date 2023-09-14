import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="flex flex-row justify-between p-5 bg-slate-500">
      <p className="text-lg font-bold">Movies DB</p>
      <div className="flex flex-row gap-4">
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
        <Link to={"/"}>Trending</Link>
      </div>
    </div>
  );
};
