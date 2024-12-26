import { useState } from 'react';
import './Header.css';

const Header = () => {
    const [activeSection, setActiveSection] = useState('About Me');

    const handleNavClick = (section) => {
        setActiveSection(section);
    };

    return (
        <header>
            <h1>Shirisha Korukonda Bhattaru</h1>
            <nav>
                <ul>
                    <li 
                        className={activeSection === 'About Me' ? 'active' : ''} 
                    >
                        <a href="/">About Me</a>
                    </li>
                    <li 
                        className={activeSection === 'Portfolio' ? 'active' : ''} 
                    >
                        <a href="/portfolio">Portfolio</a>
                    </li>
                    <li 
                        className={activeSection === 'Contact' ? 'active' : ''} 
                    >
                        <a href="/contact">Contact</a>
                    </li>
                    <li 
                        className={activeSection === 'Resume' ? 'active' : ''} 
                    >
                       <a href="/resume">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;