import React, { useState } from "react";

import "./PostListItem.css";

function PostListItem({
  label,
  deleteEl,
  like,
  id,
  important,
  toggleLiked,
  toggleImportant,
}) {
  let classNames =
    "app-list-item d-flex justify-content-between list-group-item";

  if (important) {
    classNames += " important";
  }

  return (
    <li className={classNames}>
      <span
        onClick={() => {
          toggleLiked(id)
        }}
        className="app-list-item-label"
      >
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={() => {
            toggleImportant(id)
          }}
          type="button"
          className="btn-star btn-sm"
        >
          <i className="fa fa-star"></i>
        </button>
        <button type="button" className="btn-trash btn-sm">
          <i
            onClick={() => {
              deleteEl(id);
            }}
            className="fa fa-trash"
          ></i>
        </button>
        <button className="btn-like">
          <i
            className={
              like ? "fa fa-heart like like_active " : "fa fa-heart like "
            }
          ></i>
        </button>
      </div>
    </li>
  );
}

export default PostListItem;
