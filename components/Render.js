import React from 'react'

export default function Render(props){
    
    return(
        <div className= {props.mode} onClick={props.countryClick} value={props.name}>
            <img src={props.img} className='flag-img'/>
            <div className='text' >
                <h2 className="country-name" >Country: {props.name}</h2>
                <p className='population' >Population: {props.population}</p>
                <p className='region' >Region: {props.region}</p>
                <p className='capital' >Capital: {props.capital}</p>
            </div>
        </div>
    ) 
    
} 