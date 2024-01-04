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
    Programming Skills: Java
    Frontend: HTML5, CSS, React JS
    Database: MySQL (Oracle)
    Framework: Spring Boot
    Software: Eclipse
    Designing Tools: Adobe XD, Figma, Canva
    Languages: English, Kannada, Hindi
    `,
  },
  {
    title: 'Education',
    id: 'education',
    content: `
    B.E - Mechanical Engineering
    Smt Kamala and Sri Venkappa M. Agadi College of Engineering and Technology
    2018-2021   6.9 CGPA
    Diploma - Mechanical Engineering
    K.L.E polytechnic, Vidya Nagar
    2018
    SSLC
    St Mary's High school, keshwapur
    2013
    
    `,
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: `
    Participated in 3 days workshop on “Adobe photoshop” organized by Computer science Department of
    SKSVMACET, Lakshmeshwar (2020)
    1st prize in “Best out of Waste ” organized by Mechanical Department of SKSVMACET, Lakshmeshwar.
    (2019)
    Participated in “project Exhibition” events, organized by Civil and Mechanical engineering Departments
    of JIT, Davangere, for final year polytechnic • students. (2017)
    Participated in National level technical project exhibition conducted by KLEvSociety's Chidanand B. Kore
    Polytechnic, Chikod
    
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
