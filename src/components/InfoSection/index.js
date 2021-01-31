import React from 'react';
import {
  Img,
  InfoSectionContainer,
  InfoSectionGridContainer,
  InfoSectionHeader,
  InfoSectionHr,
  InfoSectionWrapper,
} from './InfoElements';

import svg1 from '../../images/svg-1.svg';
import svg2 from '../../images/svg-2.svg';
import svg3 from '../../images/svg-3.svg';
import svg4 from '../../images/svg-4.svg';
import svg5 from '../../images/svg-5.svg';
import svg6 from '../../images/svg-6.svg';
import svg7 from '../../images/svg-7.svg';
import svg8 from '../../images/svg-8.svg';
import svg9 from '../../images/svg-9.svg';
import svg10 from '../../images/svg-10.svg';

function InfoSection () {
  return (
    <InfoSectionWrapper>
      <InfoSectionContainer>
        <InfoSectionHeader>
          Over 750,000 companies use Slack to get work done
        </InfoSectionHeader>
        <InfoSectionHr />
        <InfoSectionGridContainer>
          <Img src={svg1} />
          <Img src={svg2} />
          <Img src={svg3} />
          <Img src={svg4} />
          <Img src={svg5} />
          <Img src={svg6} />
          <Img src={svg7} />
          <Img src={svg8} />
          <Img src={svg9} />
          <Img src={svg10} />
        </InfoSectionGridContainer>
      </InfoSectionContainer>
    </InfoSectionWrapper>
  );
}

export default InfoSection;
