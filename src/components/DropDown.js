import React, { useEffect, useState } from "react";
import Select from 'react-select';
import "./DropDown.css"



export function DogBreeds() {
    const [breeds, setBreeds] = useState([]);
    const [chosenBreed, setchosenBreed] = useState();
    const [dogBreeds, setDogBreeds] = useState([]);
  
    
useEffect(() => {
    getAllBreeds()
    
    
 },[] )
 useEffect(() => {
  return fetch("http://localhost:8088/breeds")
    .then(res => res.json())
    .then((data) => {setDogBreeds(data)})
  
  
},[] )


const getAllBreeds = () => {
    return fetch("http://localhost:8088/breeds")
    .then(res => res.json())
    .then((data) =>
     { const changedBody = data.map((dog) =>  (         
         {label: dog.name, value: dog.id }))
          return setBreeds(changedBody)
    
          

    })
}
console.log(chosenBreed)
    return (      
        <> 
        <div className="BreedDropDown">
      <Select
        options={breeds}
        onChange= {(something) => {
            breeds.map((breed)=> {
             const foundDog = dogBreeds.find(dog => dog.id === something.value)
                setchosenBreed(foundDog)
                console.log(chosenBreed)
            })
 
                  
        }}
        placeholder= "Search for Breed"
        />
         </div>
        < div className= "chosenBreed">
            <p>{chosenBreed?.description}</p>
        
        
      
        
    
        </div>
        </>
  );

}




