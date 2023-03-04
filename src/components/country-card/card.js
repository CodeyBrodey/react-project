import './style.css';
import React, { useState, useEffect } from 'react';


function CountryCard(){
    
let countries;
let [countryNames, setCountryNames] = useState('');
let [countryFlags, setCountryFlags] = useState('');


    async function getData() {
        let res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json();
        countries = data; 
        countries.forEach((country) => {
            setCountryNames(country.name.common);
            setCountryFlags(country.flags.png)
        })
        console.log(countries)
    }
    
    useEffect(() => {
        getData();
    }, []);



    return(
        <div className='card'>
            <img src={countryFlags} alt="" className='card__img'/>
            <h3>{countryNames}</h3>
        </div>
    )
}

export default CountryCard;