import React, {useState} from "react";


function Search({onSearch}) {
const [searchPlant, setSearchPlant] = useState("")

function handleSubmit(e) {
  e.preventDefault();
  onSearch(searchPlant)
}

function handleSearchInput(event) {
  setSearchPlant(event.target.value)
}

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
    {/* <div className="searchbar" onSubmit= {handleSubmit}> */}
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchPlant}
        onChange={handleSearchInput}
      />
      <button type="submit">Search</button>
    {/* //</div> */}
    </form>
  );
}

export default Search;
