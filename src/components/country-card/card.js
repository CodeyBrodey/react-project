import './style.css';
import React, { useState, useEffect } from 'react';


function CountryCard(props){
    const { name, flags, population, region, capital} = props.country;

    function HandleCardClick(){
        let [ myDiv, setMyDiv ] = useState('');
        setMyDiv(
            <div className='CountryCard__info'>
            </div>
        )
    }

    return(
        <div className='card' onClick={HandleCardClick}>
            <img src={flags.png} alt="" className='card__img'/>
            <div className="card__info">
                <h3 className='card__h3'>{name.common}</h3>
                <p className='card__population'>Population: <span className='card__population--result'>{population.toLocaleString()}</span></p>
                <p className='card__region'>Region: <span className='card__region--result'>{region}</span></p>
                <p className='capital'>Capital: <span className='card__capital--result'>{capital}</span></p>
            </div>
        </div>
    )
}

function CountryCards() {
    let [countries, setCountries] = useState([]);

    async function getData() {
        let res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json();
        setCountries(data); 
    }

    useEffect(() => {
        getData();
    },[]);

    return (
        <div>
          {countries.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
        </div>
      );
}

export default CountryCards;