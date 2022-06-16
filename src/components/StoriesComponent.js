import React from "react";
import { useGlobalContext } from "../context/context";
import SpinnerComponent from "./Spinner/SpinnerComponent";

const StoriesComponent = () => {
  const { hits, isLoading, removePost } = useGlobalContext();

  if (isLoading) {
    return <SpinnerComponent />;
  }
  return (
    <div className="header_div ">
      {hits.map((curr) => {
        let { title, author, num_comments, objectID, url } = curr;
        return (
          <div key={objectID} className="main_div">
            <h1 className="div_title">{title}</h1>
            <p className="div_author">
              By {author} | {num_comments}
            </p>
            <div className="div_btn">
              <a href={url} target="_bank" className="primary_btn">
                Read More
              </a>
              <button
                className="secondary_btn"
                onClick={() => removePost(objectID)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StoriesComponent;
