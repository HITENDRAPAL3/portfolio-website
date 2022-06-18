import React from 'react';
import { DiSqllite,DiCodepen, DiAtom, DiCode, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <br/>
    <SectionTitle>Tools & Technologies</SectionTitle>
    <SectionText>
      I am familiar with following technologies.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiCode size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            C++ <br />
            Javascript <br/>
            Python (Basic)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAtom size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            React, Nextjs, Redux <br/>
            Node.js, MangoDB, SQL <br/>
            SanityCMS, GraphCMS<br/>
            Bootstrap, TailwindCSS
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCodepen size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Other</ListTitle>
          <ListParagraph>
            Data Structures & Algorithms <br />
            Git, Github <br/>
            Adobe Illustrator, Photoshop
          </ListParagraph>
        </ListContainer>
      </ListItem>
       <ListItem>
        <picture>
          <DiSqllite size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Subjects</ListTitle>
          <ListParagraph>
            Operating System<br />
            Database Management System<br/>
            Object Oriented Programming<br/>
            Computer Networks
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;