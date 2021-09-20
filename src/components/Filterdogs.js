import React, { useEffect, useState } from "react";
import "./Filterdogs.scss";

export function FilterApp() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [breeds, setBreeds] = useState([]);
  const [search, setSearch] = useState("");
  const [searchData] = useState(["name"]);
  const [filterApartment, setFilterApartment] = useState(["All"]);

  useEffect(() => {
    return fetch("http://localhost:8088/breeds")
      .then((res) => res.json())
      .then((data) => {
        setIsLoaded(true);
        setBreeds(data);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  function searchBreed(breeds) {
    return breeds.filter((breed) => {
      if (breed.apartment == filterApartment) {
        return searchData.some((searchedBreed) => {
            console.log(searchBreed) 
          return (
            breed[searchedBreed]
              .toString()
              .toLowerCase()
              .indexOf(search.toLowerCase()) > -1
               
          );
        });
      } else if (filterApartment == "All") {
        return searchData.some((searchedBreed) => {
          return (
            breed[searchedBreed]
              .toString()
              .toLowerCase()
              .indexOf(search.toLowerCase()) > -1
              );
            });
        }
    });
}
if (error) {
    return <>{error.message}</>;
} else if (!isLoaded) {
    return <>loading...</>;    
      } else {
        return (
          <div className="wrapper">
            <div className="search-wrapper">
              <label htmlFor="search-form">
                <input
                  type="search"
                  name="search-form"
                  id="search-form"
                  className="search-input"
                  placeholder="Search for Breed"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <span className="sr-only">Search For a Breed</span>
              </label>
            </div>
            <div className="select">
              <select
                onChange={(e) => {
                  setFilterApartment(e.target.value);
                }}
                className="custom-select"
                aria-label="Do you live in an Apartment"
              >
                <option value="All">Filter Apartment</option>
                <option value="1">Farm</option>
                <option value="2">House with Yard</option>
                <option value="3">Town Home</option>
                <option value="4">Big Apartment</option>
                <option value="5">Tiny Apartment</option>
              </select>
              <span className="focus"></span>
            </div>
            <ul className="card-grid">
              {searchBreed(breeds).map((breed) => (
                <li>
                  <article className="card" key={breed.description}>
                    <div className="card-image">
                      <img src={breed.image} alt={breed.name} />
                    </div>
                    <div className="card-content">
                      <h2 className="card-name">{breed.name}</h2>
                      <ol className="card-list">
                        <li key="apartment">
                          Apartment: <span>{breed.apartment}</span>
                        </li>

                        <li key="novice">
                          Good for Novice: <span>{breed.novice_owner}</span>
                        </li>

                        <li key="energy">
                          Energy: <span>{breed.energy}</span>
                        </li>
                      </ol>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        );
      }
    };
  

