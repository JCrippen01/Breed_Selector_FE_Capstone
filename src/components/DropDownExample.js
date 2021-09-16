import React, { useEffect, useState, Component } from "react";
import Select from 'react-select';



const myDogs = [
  { label: 'Golden', value: 'Golden' },
  { label: 'Digby', value: 'Digby' },
  { label: 'Jefe', value: 'Jefe' },
  { label: 'Kenji', value: 'Kenji' },
  { label: 'JuJu', value: 'JuJu' },
  { label: 'Pointer', value: 'Pointer' },
];

function BreedDropDown() {
  return (
    <div className="BreedDropDown">
      <Select
        options={myDogs}
      />
    </div>
  );
}

export default BreedDropDown;

