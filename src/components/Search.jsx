import React from "react";
import styles from "./Search.module.css";

const Search = ({ users, searchDisplay, setSearchDisplay }) => {
  const searchHandle = (e) => {
    const value = e.target.value.toLowerCase();
    if (!value) return setSearchDisplay(users);
    console.log(value);
    const tempSearchDisplay = searchDisplay.filter((user) =>
      user.name.toLowerCase().startsWith(value)
    );
    console.log(tempSearchDisplay);
    setSearchDisplay(tempSearchDisplay);
  };

  return (
    <div className={styles.searchContainer}>
      <label htmlFor="search">Search</label>
      <input type="text" id="search" onChange={searchHandle} />
      <button>Add</button>
    </div>
  );
};

export default Search;
