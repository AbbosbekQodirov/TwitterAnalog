import React, { useEffect } from "react";
import PostListItem from "../postListItem";

import "./PostList.css";

function PostList({ data, deleteEl, toggleLiked, toggleImportant }) {
  useEffect(() => {
    const ul = document.querySelector(".ul");
    ul.scrollTo(0, document.querySelector(".ul").scrollHeight);
  }, [data]);

  return (
    <ul className="app-list list-group ul">
      {data?.map((item) => {
        return (
          <PostListItem
            key={item.id}
            {...item}
            deleteEl={deleteEl}
            toggleLiked={toggleLiked}
            toggleImportant={toggleImportant}
          />
        );
      })}
    </ul>
  );
}

export default PostList;
