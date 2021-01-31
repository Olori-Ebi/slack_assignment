import React from 'react';
import background from '../../images/background.jpg';
import {
  HeroContainer,
  HeroBg,
  BackGround,
  HeroContent,
  HeroH1,
  HeroSpan,
  HeroP,
  HeroBtnWrapper,
  Button,
} from './HeroElements';

function HeroSection () {
  return (
    <HeroContainer>
      <HeroBg>
        <BackGround src={background} type="image" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome to Your <HeroSpan>New HQ.</HeroSpan> </HeroH1>
        <HeroP>More than conversations, a better way to communicate</HeroP>
        <HeroBtnWrapper>
          <Button>connect</Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
