import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './Navigation.css'; // Assuming you have some CSS for styling

const Navigation = () => {
    const history = useHistory();
    const location = useLocation();
    const [activeTitle, setActiveTitle] = useState(location.pathname);

    const handleNavigation = (path) => {
        history.push(path);
        setActiveTitle(path);
    };

    return (
        <nav>
            <ul>
                <li
                    className={activeTitle === '/section1' ? 'active' : ''}
                    onClick={() => handleNavigation('/section1')}
                >
                    Section 1
                </li>
                <li
                    className={activeTitle === '/section2' ? 'active' : ''}
                    onClick={() => handleNavigation('/section2')}
                >
                    Section 2
                </li>
                <li
                    className={activeTitle === '/section3' ? 'active' : ''}
                    onClick={() => handleNavigation('/section3')}
                >
                    Section 3
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;