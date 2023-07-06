import React from "react";

import "./SearchPanel.css";

function SearchPanel() {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Search by posts"
    />
  );
}

export default SearchPanel;
