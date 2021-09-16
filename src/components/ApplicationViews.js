import React from "react"
import { Route } from "react-router-dom"
//import { Users } from "./customers/UserList"
import { DogBreeds } from "./DropDown"



export const ApplicationViews = () => {
    return (
        <>
            {/* <Route exact path="/users">
                <UserList />
            </Route> */}

            
            <Route exact path="/breeds">
                <DogBreeds />
            </Route>
            </>
    )
}