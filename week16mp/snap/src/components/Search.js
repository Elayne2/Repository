import ImageGallery from "./Images";
import React, { useState } from "react";

const Search = ({handleSearch}) =>{
    const [searchTerm, setSearchTerm] = useState("");

    function submitSearch(e){

        handleSearch(searchTerm)
    }

  return (
    <div>
      
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={submitSearch}>Search</button>
    </div>
  );
};

export default Search;