import React, { useState } from 'react';
import Country from './Country';

function CountryFun(props) {

    const[CountryName ,setcountryName]=useState('India')
    const ChangeCountry = ()  =>{
        setcountryName ('US')
    }
    return (
        <div>
            <h1>Country function base Component</h1>
            <p>{CountryName}</p>
            <button onClick={()=>ChangeCountry()}>Change country</button>
            <Country place_name={CountryName === 'India' ? "Tajmahal"  :  "Statue Of Liberty"}/>
        </div>
    );
}

export default CountryFun;