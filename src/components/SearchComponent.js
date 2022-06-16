import React from "react";
import { useGlobalContext } from "../context/context";

const SearchComponent = () => {
  const { query, searchPost } = useGlobalContext();
  return (
    <>
      <div className="search_div">
        <form className=" form_div" onSubmit={(e) => e.preventDefault()}>
          <h1 className="font-bold tracking-wider text-2xl">Here Is Tech Updated News</h1>
          <input
            type="text"
            className="input_style"
            placeholder="search here"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          />
        </form>
      </div>
    </>
  );
};

export default SearchComponent;
