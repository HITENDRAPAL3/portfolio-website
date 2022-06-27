import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = (props) => (
  <>
  
    <Section row padding>
      <div style={{width: 500}}><img style={{boxShadow: "3px 3px 20px #950101" , borderRadius: "50%"}} src=".\images\profile.png" alt="" width="300px" height="300px"/></div>      
      <LeftSection >
        <SectionTitle main center>
          Hi, I am <br />
          Hitendra Singh Pal
        </SectionTitle>
        <SectionText>
        This is my personal Portfolio Website. I have mentioned different skills that I am familiar with along with my projects.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;