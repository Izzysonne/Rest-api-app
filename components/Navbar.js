import React from 'react'

export default function Navbar(props){
    
    return (
        <nav className={props.darkMode ? "nav-dark" : ""}>
            <span>Where in the world?</span>
            <div className='dark-mood' >
                <img 
                    onClick={props.toggleDarkMode}  
                    src={props.darkMode ? './images/moon.png':'./images/moon-outline.svg'}
                    className={props.darkMode ? "crisp-dark img-dark" : ""}
                 />
                <p onClick={props.toggleDarkMode} className='nav-text'>Dark Mood</p>
            </div>
        </nav>
    )
}