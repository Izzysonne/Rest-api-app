import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { build } from 'vite';

export default function App() {
    const [darkMode, setDarkMode] = React.useState(false);
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode);
    }
    
    return (
        <div>
            <Navbar 
                darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode}
            />
            <Main darkMode={darkMode} />
        </div>
    );
}
