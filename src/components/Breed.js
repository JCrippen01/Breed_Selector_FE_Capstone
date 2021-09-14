import React, { useEffect, useState } from "react"

export const BreedList = () => {
    const [breeds, setBreeds] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/breeds")
                .then(res => res.json())
                .then((data)=> {
                     setBreeds(data)
                })
                
        },
        [])




        return (

        <h1>Breed List</h1>
        )

}
