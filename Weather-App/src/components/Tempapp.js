import React, { Component, useEffect, useState } from "react";

function Tempapp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=67eae9e5d8f5333209f46b7699459be9`;
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <div className="container">
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputFeild"
            placeholder="Enter location"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p>No Data Found</p>
        ) : (
          <div className="weather">
            <div className="info">
              <h2 className="location">
              <i className="fas fa-street-view">{search}</i>
              </h2>
              <h1 className="temp">{city.temp}&deg;F</h1>
              {/* <h3 className="tempmin_max">hello</h3> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tempapp;
