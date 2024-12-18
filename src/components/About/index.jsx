import React from 'react';
import './About.css'; // Assuming you have some CSS for styling

const About = () => {
    return (
        <div className="about-section">
            <h1>About Me</h1>
            <div className="about-content">
                <img 
                    src="path/to/your/photo.jpg" 
                    alt="Developer Avatar" 
                    className="developer-photo"
                />
                <p className="developer-bio">
                    Hi, I'm [Your Name], a passionate developer with experience in [Your Skills/Technologies]. I love creating innovative solutions and continuously learning new things. Welcome to my portfolio!
                </p>
            </div>
        </div>
    );
};

export default About;