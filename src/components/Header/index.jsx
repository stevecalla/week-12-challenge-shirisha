import React, { useState } from 'react';
import './Header.css'; // Assuming you have some CSS for styling

const Header = () => {
    const [activeSection, setActiveSection] = useState('About Me');

    const handleNavClick = (section) => {
        setActiveSection(section);
    };

    return (
        <header>
            <h1>Developer's Name</h1>
            <nav>
                <ul>
                    <li 
                        className={activeSection === 'About Me' ? 'active' : ''} 
                        onClick={() => handleNavClick('About Me')}
                    >
                        About Me
                    </li>
                    <li 
                        className={activeSection === 'Portfolio' ? 'active' : ''} 
                        onClick={() => handleNavClick('Portfolio')}
                    >
                        Portfolio
                    </li>
                    <li 
                        className={activeSection === 'Contact' ? 'active' : ''} 
                        onClick={() => handleNavClick('Contact')}
                    >
                        Contact
                    </li>
                    <li 
                        className={activeSection === 'Resume' ? 'active' : ''} 
                        onClick={() => handleNavClick('Resume')}
                    >
                        Resume
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;