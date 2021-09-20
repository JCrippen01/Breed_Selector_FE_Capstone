import React, { useEffect, useState } from "react";
import "./Filterdogs.scss"



  export function FilterApp() {
    const [breeds, setBreeds] = useState([]);
  

  useEffect(() => {
    return fetch("http://localhost:8088/breeds")
      .then((res) => res.json())
      .then((data) => {
        setBreeds(data);
      });
  }, []);

  return (
    /* here we map over the element and display each item as a card  */
    <div className="wrapper">
        <ul className="card-grid">
            {breeds.map((breed) => (
                <li>
                    <article className="card" key={breed.description}>
                        <div className="card-image">
                            <img src={breed.img} alt={breed.name} />
                        </div>
                        <div className="card-content">
                            <h2 className="card-name">{breed.name}</h2>
                            <ol className="card-list">
                                <li key="apartment">
                                    Apartment: {" "}
                                     <span>{breed.apartment}</span>
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




  