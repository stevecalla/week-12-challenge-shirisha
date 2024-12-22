import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ display: 'flex', justifyContent: 'center', padding: '1rem', background: '#f1f1f1' }}>
            <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1rem' }}>
                <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin-username/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1rem' }}>
                <FaLinkedin size={30} />
            </a>
            <a href="https://stackoverflow.com/users/your-stackoverflow-id/your-stackoverflow-username" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1rem' }}>
                <FaStackOverflow size={30} />
            </a>
        </footer>
    );
};

export default Footer;