import React, { useState } from 'react';
import styled from 'styled-components';
import img1 from "../assets/img/2150898633 (1).png";

const AboutSectionContainer = styled.section`
  color: white;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageContainer = styled.div`
  text-align: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 3rem;
`;

const TabButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 1rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`;

const TabButton = styled.button`
  background-color: ${({ active }) => (active ? '#df5fdd' : 'transparent')};
  color: ${({ active }) => (active ? '#ffffff' : '#B8B8B8')};
  border: none;
  padding: 0.5rem 2rem;
  margin-right: 1rem;
  cursor: pointer;
`;

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: `
      Node.js
      Express
      PostgreSQL
      Sequelize
      JavaScript
      React
    `,
  },
  {
    title: 'Education',
    id: 'education',
    content: `
      Fullstack Academy of Code
      University of California, Santa Cruz
    `,
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: `
      AWS Cloud Practitioner
      Google Professional Cloud Developer
    `,
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <AboutSectionContainer id="about">
      <GridContainer className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <ImageContainer>
          <img src={img1} alt="About Me" width={500} height={500} />
        </ImageContainer>
        <ContentContainer>
          <Title>About Me</Title>
          <Description>
            I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
          </Description>
          <TabButtonsContainer>
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                active={tab === tabData.id}
                onClick={() => handleTabChange(tabData.id)}
              >
                {tabData.title}
              </TabButton>
            ))}
          </TabButtonsContainer>
          <div className="mt-8">
            <ul className="list-disc pl-2">
              {TAB_DATA.find((t) => t.id === tab).content.split('\n').map((item, index) => (
                <li key={index}>{item.trim()}</li>
              ))}
            </ul>
          </div>
        </ContentContainer>
      </GridContainer>
    </AboutSectionContainer>
  );
};

export default AboutSection;
