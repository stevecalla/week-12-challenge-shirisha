import React from 'react';
import './Portfolio.css';

const projects = [
    {
        title: 'Project One',
        image: 'path/to/image1.jpg',
        deployedLink: 'https://deployedlink1.com',
        githubLink: 'https://github.com/user/project1'
    },
    {
        title: 'Project Two',
        image: 'path/to/image2.jpg',
        deployedLink: 'https://deployedlink2.com',
        githubLink: 'https://github.com/user/project2'
    },
    {
        title: 'Project Three',
        image: 'path/to/image3.jpg',
        deployedLink: 'https://deployedlink3.com',
        githubLink: 'https://github.com/user/project3'
    },
    {
        title: 'Project Four',
        image: 'path/to/image4.jpg',
        deployedLink: 'https://deployedlink4.com',
        githubLink: 'https://github.com/user/project4'
    },
    {
        title: 'Project Five',
        image: 'path/to/image5.jpg',
        deployedLink: 'https://deployedlink5.com',
        githubLink: 'https://github.com/user/project5'
    },
    {
        title: 'Project Six',
        image: 'path/to/image6.jpg',
        deployedLink: 'https://deployedlink6.com',
        githubLink: 'https://github.com/user/project6'
    }
];

const Portfolio = () => {
    return (
        <div className="portfolio">
            {projects.map((project, index) => (
                <div key={index} className="portfolio-item">
                    <h3>{project.title}</h3>
                    <img src={project.image} alt={project.title} />
                    <div className="links">
                        <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Deployed Application</a>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Portfolio;