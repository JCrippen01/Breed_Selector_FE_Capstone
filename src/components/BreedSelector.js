import React from "react";
import { Route, Redirect } from "react-router-dom";
import { DogBreeds } from './DropDown';
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./BreedSelector.css";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { FilterApp } from "./Filterdogs";


export const BreedSelector = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("selector_users")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
              <DogBreeds />
              <FilterApp />
              
             
              
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);

