import React, { useState } from "react";

import "./PostAddForm.css";

function PostAddForm({ addEl }) {
  const [label, setlabel] = useState("");
  const add = (e) => {
    e.preventDefault();
    const obj = {
      label,
      important: false,
      like: false,
      id: Math.random() * 100,
    };
    addEl(obj);
    setlabel("");
  };
  return (
    <form onSubmit={add} className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="What are you thinking about?"
        className="form-control new-post-label"
        value={label}
        onChange={(e) => {
          setlabel(e.target.value);
        }}
      />
      <button type="submit" className="btn btn-outline-secondary">
        Add Post
      </button>
    </form>
  );
}

export default PostAddForm;
