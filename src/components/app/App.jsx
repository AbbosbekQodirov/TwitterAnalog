import React, { useState } from "react";
import AppHeader from "../appHeader";
import SearchPanel from "../searchPanel/SearchPanel";
import PostStatusFilter from "../postStatusFilter";
import PostList from "../postList";
import PostAddForm from "../postAddForm";

import "./App.css";

function App() {
  const [data, setData] = useState([
    {
      label: "Hello World",
      like: false,
      important: false,
      id: 1,
    },
    {
      label: "Hello Codial",
      like: true,
      important: true,
      id: 2,
    },
    {
      label: "Hello Najot",
      like: false,
      important: false,
      id: 3,
    },
  ]);

  const deleteEl = (id) => {
    const deleted = data.filter((item) => {
      return item.id !== id;
    });
    setData(deleted);
  };

  const addEl = (obj) => {
    setData([...data, obj]);
  };

  const toggleLiked = (id) => {
    const index = data.findIndex((elem) => elem.id === id);
    const oldItem = data[index];
    const newItem = { ...oldItem, like: !oldItem.like };
    const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    setData(newArr);
  };


  const toggleImportant = (id) => {
    const index = data.findIndex((elem) => elem.id === id);
    const oldItem = data[index];
    const newItem = { ...oldItem, important: !oldItem.important };
    const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    setData(newArr);
  };

  // const filterData = (type)=>{
  //   const oldArr = [...data]

  //   if (type==="liked") {
  //     const newData = oldArr.filter((item)=>{
  //       return item.like == true
  //     })
  //     setData(newData)
  //   }else if (type === "all") {
  //     const newData = oldArr.filter((item) => {
  //       return item;
  //     });
  //     setData(newData);
  //   }

  // }

  


  const allPost = data.length
  const liked = data.filter(item => item.like).length




  return (
    <div className="app">
      <AppHeader allPost={allPost} liked={liked} />
      <div className="search-panel d-flex">
        <SearchPanel />
        {/* <PostStatusFilter filterData={filterData} /> */}
      </div>
      <PostList
        data={data}
        deleteEl={deleteEl}
        toggleLiked={toggleLiked}
        toggleImportant={toggleImportant}
      />
      <PostAddForm addEl={addEl} />
    </div>
  );
}

export default App;
