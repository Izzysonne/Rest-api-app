import React from 'react';
import Render from './Render';
import Newrender from './Newrender';

export default function Main(props) {
    const [country, setCountry] = React.useState([]);
    const [formData, setFormData] = React.useState({
        countryName: '',
        display: false,
    });
    const [selectedRegion, setSelectedRegion] = React.useState(''); // Track selected region
    let isSeaching = false
    
    React.useEffect(function () {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => res.json())
            .then((data) => setCountry(data));
    }, []);

    const newData = country
        .filter((item) => selectedRegion === '' || item.region === selectedRegion) // Filter by selected region
        .map((item) => (
            <Render
                key={item.name.common}
                img={item.flags.png}
                name={item.name.common}
                population={item.population.toLocaleString()}
                region={item.region}
                capital={item.capital}
                mode={props.darkMode ? "nav-dark container" : "container"}
                countryClick={handleCountryClick}
                
            />
        ));

    function handleFilter(e) {
        setSelectedRegion(e.target.value); // Update selected region
    }

    function handleChange(e) {
        setFormData((prevFormData) => ({
            ...prevFormData,
            countryName: e.target.value,
            display: !formData.display,
        }));
    }
    
    
    
    

function click(a){
    for(let i=0; i< country.length; i++){
        const fromCountry = country[i].name.common.toLowerCase()
        
        if ( a === fromCountry){
            const currencyObj = country[i].currencies
            const [firstKey] = Object.keys(currencyObj)
            const languageObj = country[i].languages
            const languageArr = Object.values(languageObj) 
            const borders = country[i].borders
            let newCount =[]
            for(let j=0; j< borders.length; j++){
                country.map(function(item){
                    if(borders[j] === item.cca3){
                        newCount.push(item.name.common)
                    }})
            }
            return (
                <Newrender
                    key={country[i].cca2}
                    image={country[i].flags.png}
                    alt={country[i].flags.alt}
                    name={country[i].name.common}
                    native={country[i].translations.nld.common}
                    population={country[i].population.toLocaleString()}
                    region={country[i].region}
                    sub={country[i].subregion}
                    capital={country[i].capital}
                    tld={country[i].tld[0]}
                    currency={currencyObj[firstKey].name}
                    language={languageArr.join(', ')}
                    newCount={newCount}
                    mode={props.darkMode ? "new-btns" : ""}
                    clickCount={dataDisplay}
                />
                )
            }
        }   
    }
    
function dataDisplay(e){
        
        setFormData(prevFormData => ({
            ...prevFormData,
            countryName: event.target.value
        })
        )
        const newE = formData.countryName.toLowerCase()
        return (click(newE))
}

function handleClick(){
    isSeaching = true
    const fromFormData = formData.countryName.toLowerCase()
    return click(fromFormData)
    
}

function handleCountryClick(e){
    let countName
    
    for(let k = 0; k < country.length; k++){
        if(event.target.src === country[k].flags.png){
            countName = country[k].name.common
            
            return countName
        }
    }
    
    
    
}


  

    return (
        <section className={props.darkMode ? 'main-dark' : ''}>
            {!handleClick() ? (
                <div className="form">
                    <input
                        className={props.darkMode ? 'nav-dark search' : 'search'}
                        type="search"
                        placeholder="search for a country"
                        name="countryName"
                        value={formData.countryName}
                        onChange={handleChange}
                    />
                    <button onClick={handleClick} type="submit"></button>
                    <div className="custom-select" >
                        <select
                            onChange={handleFilter}
                            className={props.darkMode ? 'nav-dark' : ''}
                        >
                            <option value="">Filter by region</option>
                            <option value="Africa">Africa</option>
                            <option value="Americas">Americas</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                    </div>
                </div>
            ) : (
                <button
                    className={props.darkMode ? 'btn-dark back' : 'back'}
                    onClick={handleChange}
                >
                    ← Back
                </button>
            )}
            {!handleClick() ? <div className="arrange">{newData}</div> : handleClick()}
        </section>
    );
}
