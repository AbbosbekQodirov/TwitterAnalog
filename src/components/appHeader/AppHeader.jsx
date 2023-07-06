import React from "react";

import "./AppHeader.css";

function AppHeader({ allPost, liked }) {
  return (
    <div className="app-header d-flex">
      <h1>Abbosbek Qodirov</h1>
      <h2>{allPost} posts, like {liked}</h2>
    </div>
  );
}

export default AppHeader;
