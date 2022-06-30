import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
          <a href={p.visit}><Img src={p.image} /></a>
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <div>
              {/* <TitleContent>Tools Used</TitleContent> */}
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit}>Link</ExternalLinks>
              <ExternalLinks href={p.source}>Github</ExternalLinks>
            </UtilityList> 
            </TitleContent>
            <Hr/>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <br/>
             
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;