import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ display: 'flex', justifyContent: 'center', padding: '1rem', background: '#f1f1f1' }}>
            <a href="https://github.com/Shirishakb" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1rem' }}>
                <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/korukonda-bhattaru-shirisha-656925326/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1rem' }}>
                <FaLinkedin size={30} />
            </a>
            <a href="https://stackoverflow.com/?newreg=50b5de87cd8b4b17b81db38b2e04e182" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1rem' }}>
                <FaStackOverflow size={30} />
            </a>
        </footer>
    );
};

export default Footer;