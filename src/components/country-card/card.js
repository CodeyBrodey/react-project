import './style.css';
import React, { useState, useEffect } from 'react';


function CountryCard(props){
    const { name, flags, population, region, capital} = props.country;

    function HandleCardClick(event){
        event.currentTarget.classList.add('card--open')
        if(event.currentTarget.classList.contains('card--open')){
            console.log('nice')
        }
    }
    function HandleBackButton(){
        
    }
    

    return(
        <div className='card' onClick={HandleCardClick}>
            <div className='card--open'>
                <button className="card--open__button" onClick={HandleBackButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='card--open__button__icon'>
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/>
                    </svg>
                    Back
                </button>
                <img src={flags.png} alt="" className='card__img'/>
            </div>
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