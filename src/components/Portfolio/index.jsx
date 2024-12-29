import './Portfolio.css'; 

import Bankroll from '../../assets/projects/Bankroll.png';
import weather_forecast from '../../assets/projects/weather-forecast.png';
import showroom from '../../assets/projects/showroom.jpg';

const projects = [
    {
        title: 'Bankroll',
        image: Bankroll,
        deployedLink:'https://eslickjr.github.io/Bankroll',
        githubLink: 'https://github.com/eslickjr/Bankroll'
    },
    {
        title: 'Weather-forecast',
        image: weather_forecast,
        deployedLink: 'https://weather-forecast-jgsx.onrender.com',
        githubLink: 'https://github.com/Shirishakb/Weather-forecast'
    },
    {
        title: 'Showroom',
        image: showroom,
        deployedLink: 'https://shirishakb.github.io/Showroom',
        githubLink: 'https://github.com/Shirishakb/Showroom'
    },
];

const Portfolio = () => {
    return (
        <div className="portfolio">
            {projects.map((project, index) => (
                <div key={index} className="portfolio-item">
                    <h3>{project.title}</h3>
                    <div className="image-container">
                        <img src={project.image} alt={project.title} />
                    </div>
                    <div className="links">
                        {project.deployedLink && (
                            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Deployed Application</a>
                        )}
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Portfolio;
