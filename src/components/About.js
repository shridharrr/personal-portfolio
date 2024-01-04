import React from 'react';
import styled from 'styled-components';

const AboutSectionContainer = styled.div`
    
    padding: 10vw;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    margin: 0px;
    @media (min-width: 768px) {
        padding: 5vw;
    }
`;

const Heading = styled.h1`
    font-size: 65 px;
    font-weight: 700;
    color: #ffffff;
    @media (min-width: 768px) {
        font-size: 2.5vw;
    }
`;

const Paragraph = styled.p`
    border: 2px solid #df5fdd;
    color: #B8B8B8;
  font-size: 18px;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  width: 100%;
    padding: 4vw;
    margin: 5vw 0;
    @media (min-width: 768px) {
        padding: 2vw;
        margin: 2.5vw 0;
    }
`;

const AboutSection = () => {
    return (
        <AboutSectionContainer>
            <Heading>About</Heading>
            <Paragraph>
                Welcome to my digital space! I'm shridhar m katwe, a UI/UX Designer with a deep passion for UI/UX design Industry. As a UI/UX designer, I have cultivated a diverse skill set and a keen eye for UI/UX Design, Product design, and development.<br></br><br></br>
                I'm always open to new opportunities, collaborations, and conversations. Whether you have a project in mind or just want to connect over a shared interest, feel free to reach out. Let's create something extraordinary together!
            </Paragraph>
        </AboutSectionContainer>
    );
};

export default AboutSection;
