import React, { useState } from "react";

function Search({ onSubmit }) {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    onSubmit(city);
    e.preventDefault();
    setCity("");
  };

  return (
    <div className="py-4 mb-4">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="row justify-content-between"
      >
        <input
          className="col-8 rounded-pill"
          type="text"
          name="city"
          value={city}
          placeholder="Search city"
          onChange={(e) => {
            handleInputChange(e);
          }}
        />

        <button
          className="btn btn-light btn-outline-secondary rounded-pill col-3 fw-bold"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
