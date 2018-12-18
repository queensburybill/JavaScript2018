import React from "react";

function SearchBar(props) {
  return (
    <form className="input-group" onSubmit={e => e.preventDefault()}>
      <span className="input-group-label">
        <i className="fas fa-search" aria-hidden="true" />
      </span>
      <input
        type="search"
        className="input-group-field"
        value={props.searchInput}
        onChange={props.setSearchInput}
        placeholder="Search"
        aria-label="Search books"
        autoFocus={true}
      />
    </form>
  );
}

export default SearchBar;
