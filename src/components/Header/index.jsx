import { useState } from 'react';
//import coverImage from '../../assets/cover/cover-image.jpg';
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
                        // onClick={() => handleNavClick('About Me')}
                    >
                        <a href="/">About Me</a>
                    </li>
                    <li 
                        className={activeSection === 'Portfolio' ? 'active' : ''} 
                        // onClick={() => handleNavClick('Portfolio')}
                    >
                        <a href="/portfolio">Portfolio</a>
                    </li>
                    <li 
                        className={activeSection === 'Contact' ? 'active' : ''} 
                        // onClick={() => handleNavClick('Contact')}
                    >
                        Contact
                    </li>
                    <li 
                        className={activeSection === 'Resume' ? 'active' : ''} 
                        // onClick={() => handleNavClick('Resume')}
                    >
                        Resume
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;