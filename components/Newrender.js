import React from 'react'

export default function Newrender(props){
    return (
            <div className='arrange'>
                <img src={props.image} alt={props.alt} />
                <div className='search-country'>
                    <h2>{props.name}</h2>
                    <p><span>Native Name:</span> {props.native}</p>
                    <p><span>Population:</span> {props.population}</p>
                    <p><span>Region:</span> {props.region}</p>
                    <p><span>Sub Region:</span> {props.sub}</p>
                    <p><span>Capital:</span> {props.capital}</p>
                    <p><span>Top Level Domain:</span> {props.tld}</p>
                    <p><span>Currency:</span> {props.currency}</p>
                    <p><span>Languages:</span> {props.language}</p>
                    <h3>Border Countries: </h3>
                    <div className='new-country'>
                        {props.newCount.map(count => <button key={count} value={count} onClick={props.clickCount}  id={props.mode}>{count}</button>)}
                    </div>   
                </div>
            </div>
    )
}