import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

const Navigation = () => {
    const location = useLocation();
    const [activeTitle, setActiveTitle] = useState(location.pathname);

    const handleNavigation = (path) => {
        setActiveTitle(path);
    };

    return (
        <nav>
            <ul className="flex-row">
                <li className={activeTitle === '/section1' ? 'active' : ''}>
                    <Link
                        to="/section1"
                        onClick={() => handleNavigation('/section1')}
                    >
                        {capitalizeFirstLetter('section 1')}
                    </Link>
                </li>
                <li className={activeTitle === '/section2' ? 'active' : ''}>
                    <Link
                        to="/section2"
                        onClick={() => handleNavigation('/section2')}
                    >
                        {capitalizeFirstLetter('section 2')}
                    </Link>
                </li>
                <li className={activeTitle === '/section3' ? 'active' : ''}>
                    <Link
                        to="/section3"
                        onClick={() => handleNavigation('/section3')}
                    >
                        {capitalizeFirstLetter('section 3')}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
