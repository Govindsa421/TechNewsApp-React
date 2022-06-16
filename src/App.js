import React from "react";
import PaginationComponent from "./components/PaginationComponent";
import SearchComponent from "./components/SearchComponent";
import StoriesComponent from "./components/StoriesComponent";

const App = () => {
  return (
    <>
      <SearchComponent />
      <PaginationComponent />
      <StoriesComponent />
    </>
  );
};

export default App;
