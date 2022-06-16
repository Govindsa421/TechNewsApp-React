import React from "react";
import { useGlobalContext } from "../context/context";

const PaginationComponent = () => {
  const { page, nbPages, getPrevPage, getNextPage } = useGlobalContext();
  return (
    <>
      <div className="pagination_div">
        <button className="pagination_btn" onClick={() => getPrevPage()}>
          prev
        </button>
        <p className="text-gray-400 text-sm">
          {page + 1} of {nbPages}
        </p>
        <button className="pagination_btn" onClick={() => getNextPage()}>
          next
        </button>
      </div>
    </>
  );
};


export default PaginationComponent;
