import React from 'react';
import {
  FooterButton,
  FooterContainer,
  FooterContainerGrid,
  FooterContainerHr,
  FooterContainerTop,
  FooterGridContainer,
  FooterLogo,
  FooterHeader,
  FooterWrapper,
  GridH1,
  GridP,
  FooterBottomParagraph,
  FooterContainerFoot,
  FooterContainerFootLeft,
  FooterContainerFootLeftTop,
  FooterContainerFootLeftTopItem,
  ArrowDown,
  Browser,
  FooterContainerFootRight,
  FooterDownloadContainer,
  FooterIconContainer,
  TwitterIcon,
  DownloadIcon,
  DownloadP,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from './FooterElement';

function Footer () {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContainerTop>
          <FooterHeader>
            Created to meet the needs of global organizations
          </FooterHeader>
          <FooterButton>Connect</FooterButton>
        </FooterContainerTop>
        <FooterContainerHr />
        <FooterContainerGrid>
          <FooterGridContainer> <FooterLogo /></FooterGridContainer>
          <FooterGridContainer>
            <GridH1>WHY SLACK?</GridH1>
            <GridP>Slack vs. Email</GridP>
            <GridP>Channels</GridP>
            <GridP>Engagement</GridP>
            <GridP>Watch the Demo</GridP>
          </FooterGridContainer>
          <FooterGridContainer>
            <GridH1>PRODUCT</GridH1>
            <GridP>Features</GridP>
            <GridP>Integrations</GridP>
            <GridP>Enterprise</GridP>
            <GridP>Solutions</GridP>
          </FooterGridContainer>
          <FooterGridContainer>
            <GridH1>PRICING</GridH1>
            <GridP>Plans</GridP>
            <GridP>Paid vs. Free</GridP>
          </FooterGridContainer>
          <FooterGridContainer>
            <GridH1>RESOURCES</GridH1>
            <GridP>Partners</GridP>
            <GridP>Developers</GridP>
            <GridP>Apps</GridP>
            <GridP>Blog</GridP>
            <GridP>Help Center</GridP>
            <GridP>Events</GridP>
          </FooterGridContainer>
          <FooterGridContainer>
            <GridH1>COMPANY</GridH1>
            <GridP>About Us</GridP>
            <GridP>Leadership</GridP>
            <GridP>Investor Relations</GridP>
            <GridP>News</GridP>
            <GridP>Media Kit</GridP>
            <GridP>Careers</GridP>
          </FooterGridContainer>
        </FooterContainerGrid>
        <FooterContainerHr />
        <FooterContainerFoot>
          <FooterContainerFootLeft>
            <FooterContainerFootLeftTop>
              <FooterContainerFootLeftTopItem>
                Status
              </FooterContainerFootLeftTopItem>
              <FooterContainerFootLeftTopItem>
                Privacy & Terms
              </FooterContainerFootLeftTopItem>
              <FooterContainerFootLeftTopItem>
                Contact Us
              </FooterContainerFootLeftTopItem>
              <FooterContainerFootLeftTopItem>
                Change Region <Browser /><ArrowDown />
              </FooterContainerFootLeftTopItem>
            </FooterContainerFootLeftTop>
            <FooterBottomParagraph>
              &copy; Copyright 2021 Slack Technologies, Inc. All rights reserved. Various trademarks held by their respective owners
            </FooterBottomParagraph>
          </FooterContainerFootLeft>
          <FooterContainerFootRight>
            <FooterDownloadContainer>
              <DownloadIcon />
              <DownloadP>Download Slack</DownloadP>
            </FooterDownloadContainer>
            <FooterIconContainer>
              <TwitterIcon />
              <FacebookIcon />
              <InstagramIcon />
              <LinkedInIcon />
            </FooterIconContainer>
          </FooterContainerFootRight>
        </FooterContainerFoot>
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;
