
import { ReactComponent as FilterIcon } from "../assets/mobile/icon-filter.svg";
import { ReactComponent as LocationIcon } from "../assets/desktop/icon-location.svg";
import { ReactComponent as SearchIcon } from "../assets/desktop/icon-search.svg";
import { useState } from "react";

function SearchBar({ filter }) {
  const [openFilter, setOpenFilter] = useState(false);
  const [searchFields, setSearchTerms] = useState({
    term: "",
    location: "",
    fullTime: false,
  });

  // It update the openFilter to true
  const handleClick = () => {
    setOpenFilter(!openFilter);
  };

  //HandleChange 
  const handleChange = ({ target }) => {
    const { name, value } = target;
      setSearchTerms({ ...searchFields, [name]: value });
  };

  
  const handleCheckboxChange = ({ target }) => {
    const { checked } = target;

    setSearchTerms({ ...searchFields, fullTime: checked });
  };

  // mobileSearch when triggered filters based on the current state of the searchFields
  const mobileSearch = () =>{
    filter(searchFields);
  }

  // Does same as mobileSearch but also update the openFilter value
  const search = () => {
    filter(searchFields);
    setOpenFilter(!openFilter);
  };

  return (
    <div className="search-bar">
      <div className="search-bar__input-field search-bar__input-field--search">
        <span className="search-bar__icon search-bar__icon--search">
          <SearchIcon />
        </span>
        <input
          name="term"
          type="text"
          value={searchFields.term}
          placeholder="Search by title..."
          // onInput triggers the handleChange when the target value changes passin it as an argument
          onInput={(target) => handleChange(target)}
        />
      </div>

      <div
        className={
          openFilter? "search-bar__hide-mobile show"
            : "search-bar__hide-mobile"
        }
      >
        <div className="search-bar__input-field ">
          <span className="search-bar__icon">
            <LocationIcon />
          </span>
          <input
            type="text"
            name="location"
            value={searchFields.location}
            placeholder="Filter by location..."
            onChange={handleChange}
          />
        </div>
        <hr />

        <div className="search-bar__input-field">
          <input
            type="checkbox"
            name="fullTime"
            id="full-time-checkbox" 
            checked={searchFields.fullTime}
            onChange={handleCheckboxChange}
          />
          <label className="bold">Full Time Only</label>
        </div>
        <button className="search-button" onClick={search}><p className="search-button-text">Search</p></button>
      </div>

      <div className="search-bar__show-mobile">
        <button
          className="search-bar__show-mobile__button--filter"
          onClick={handleClick}
        >
          <FilterIcon />
        </button>

        <button
          className="search-bar__show-mobile__button--search"
          onClick={mobileSearch}
        >
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;