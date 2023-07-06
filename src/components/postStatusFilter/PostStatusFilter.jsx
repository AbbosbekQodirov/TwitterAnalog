import React from 'react'

function PostStatusFilter({ filterData }) {
  return (
    <div className="btn-group">
      <button onClick={()=>{
        filterData("all")
      }} className="btn btn-info">All</button>
      <button onClick={()=>{
        filterData("liked")
      }} className="btn btn-outline-secondary ">
        Liked
      </button>
    </div>
  );
}

export default PostStatusFilter 