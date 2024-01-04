import React from 'react';
import styled from 'styled-components';

const AboutSection = () => {
    const aboutSectionStyles = {
        backgroundColor: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
        padding: '150px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        border: '2px solid #000000'
    };

    const headingStyles = {
        fontSize: '50px',
        color: '#ffff',
    };

    const paragraphStyles = {
        border: '2px solid #df5fdd',
        padding: '60px',
        
        margin: '50px 0px',
    };

    return (
        <div className="about-section" style={aboutSectionStyles}>
            <h1 style={headingStyles}>About</h1>
            <p style={paragraphStyles}>
                Welcome to my digital space! I'm John Smith, a UI/UX Designer with a deep passion for UI/UX design Industry. As a UI/UX designer, I have cultivated a diverse skill set and a keen eye for UI/UX Design, Product design, and development.
                I'm always open to new opportunities, collaborations, and conversations. Whether you have a project in mind or just want to connect over a shared interest, feel free to reach out. Let's create something extraordinary together!
            </p>
        </div>
    );
}

export default AboutSection;
