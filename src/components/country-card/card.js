import './style.css';
import React, { useState, useEffect } from 'react';


function CountryCard(){
    
let countries;
let [countryName, setCountryName] = useState('');
let [countryFlag, setCountryFlag] = useState('');
let [countryPopulation, setCountryPopulation] = useState('');
let [countryRegion, setCountryRegion] = useState('');
let [countryCapital, setCountryCapital] = useState('');



    async function getData() {
        let res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json();
        countries = data; 
        countries.forEach((country) => {
            setCountryName(country.name.common);
            setCountryFlag(country.flags.png);
            setCountryPopulation(country.population);
            setCountryRegion(country.region);
            setCountryCapital(country.capital);
        })
        console.log(countries)
    }
    
    useEffect(() => {
        getData();
    });



    return(
        <div className='card'>
            <img src={countryFlag} alt="" className='card__img'/>
            <div className="card__info">
                <h3 className='card__h3'>{countryName}</h3>
                <p className='card__population'>Population: <span className='card__population--result'>{countryPopulation}</span></p>
                <p className='card__region'>Region: <span className='card__region--result'>{countryRegion}</span></p>
                <p className='capital'>Capital: <span className='card__capital--result'>{countryCapital}</span></p>
            </div>
        </div>
    )
}

export default CountryCard;