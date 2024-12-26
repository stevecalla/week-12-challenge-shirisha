import './Portfolio.css'; 
const projects = [
    {
        title: 'BookFlix',
        image: "src/assets/Bookflix.png",
        githubLink: 'https://github.com/JuanGirelli/Bookflix'
    },
    {
        title: 'Bankroll',
        image: "src/assets/Bankroll.png",
        deployedLink:'https://eslickjr.github.io/Bankroll',
        githubLink: 'https://github.com/eslickjr/Bankroll'
    },
    {
        title: 'Weather-forecast',
        image: 'src/assets/weather-forecast.png',
        deployedLink: 'https://weather-forecast-jgsx.onrender.com',
        githubLink: 'https://github.com/Shirishakb/Weather-forecast'
    },
    {
        title: 'Showroom',
        image: 'src/assets/showroom.jpg',
        deployedLink: 'https://shirishakb.github.io/Showroom',
        githubLink: 'https://github.com/user/project4'
    },
    {
        title: 'Sample Readme Generator',
        image: 'src/assets/readme.png',
        githubLink: 'https://github.com/Shirishakb/Sample-template-readme-generator'
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
