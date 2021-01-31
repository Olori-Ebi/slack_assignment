import React from 'react';
import {
  ResponsiveWrapperContainer,
  ResponsiveContainer,
  ResponsiveHeader,
  ResponsiveButton,
  ResponsiveDropdown,
  ResponsiveGrid,
  ResponsiveGridContainer,
  ResponsiveGridContent,
  ResponsiveGridContentH4,
  ResponsiveGridP,
  ResponsiveHr,
  ResponsiveLogo,
  ArrowDown,
  ResponsiveBottomParagraph,
  ResponsiveButtonContainer,
  ResponsiveDetailContainer,
  ResponsiveIconContainer,
  ResponsiveP,
  ResponsiveSpan,
  TwitterIcon,
  GlobeIcon,
  DownloadIcon,
  DownloadText,
  ResponsiveParaphContainer,
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  ResponsiveDropdown3,
  ResponsiveDropdown4,
  ResponsiveDropdown5,
  ResponsiveDropdown2,
} from './ResponsiveElement';

function FooterResponsive({
  clicked,
  setClicked,
  productClicked,
  productToggle,
  companyClicked,
  companyToggle,
  pricingClicked,
  pricingToggle,
  resourcesClicked,
  resourcesToggle,
}) {
  return (
    <ResponsiveWrapperContainer>
      <ResponsiveContainer>
        <ResponsiveHeader>
          Created to meet the needs of global organizations
        </ResponsiveHeader>
        <ResponsiveButton>Connect</ResponsiveButton>
        <ResponsiveHr />
        <ResponsiveGridContainer>
          <ResponsiveLogo />
          <ResponsiveGrid>
            <ResponsiveGridContent>
              <ResponsiveGridContentH4>WHY SLACK?</ResponsiveGridContentH4>
              <ArrowDown onClick={setClicked} clicked={clicked} />
            </ResponsiveGridContent>
            <ResponsiveDropdown clicked={clicked}>
              <ResponsiveGridP>Slack vs. Email</ResponsiveGridP>
              <ResponsiveGridP>Channels</ResponsiveGridP>
              <ResponsiveGridP>Engagements</ResponsiveGridP>
              <ResponsiveGridP>Watch the Demo</ResponsiveGridP>
            </ResponsiveDropdown>
          </ResponsiveGrid>
          <ResponsiveGrid>
            <ResponsiveGridContent>
              <ResponsiveGridContentH4>PRODUCT</ResponsiveGridContentH4>
              <ArrowDown
                productClicked={productClicked}
                onClick={productToggle}
              />
            </ResponsiveGridContent>
            <ResponsiveDropdown2 productClicked={productClicked}>
              <ResponsiveGridP>Features</ResponsiveGridP>
              <ResponsiveGridP>Integrations</ResponsiveGridP>
              <ResponsiveGridP>Enterprise</ResponsiveGridP>
              <ResponsiveGridP>Solutions</ResponsiveGridP>
            </ResponsiveDropdown2>
          </ResponsiveGrid>
          <ResponsiveGrid>
            <ResponsiveGridContent>
              <ResponsiveGridContentH4>PRICING</ResponsiveGridContentH4>
              <ArrowDown
                onClick={pricingToggle}
                pricingToggle={pricingToggle}
              />
            </ResponsiveGridContent>
            <ResponsiveDropdown3 pricingClicked={pricingClicked}>
              <ResponsiveGridP>Plans</ResponsiveGridP>
              <ResponsiveGridP>Paid vs. Free</ResponsiveGridP>
            </ResponsiveDropdown3>
          </ResponsiveGrid>
          <ResponsiveGrid>
            <ResponsiveGridContent>
              <ResponsiveGridContentH4>RESOURCES</ResponsiveGridContentH4>
              <ArrowDown
                onClick={resourcesToggle}
                resourcesToggle={resourcesToggle}
              />
            </ResponsiveGridContent>
            <ResponsiveDropdown4 resourcesClicked={resourcesClicked}>
              <ResponsiveGridP>Partners</ResponsiveGridP>
              <ResponsiveGridP>Developers</ResponsiveGridP>
              <ResponsiveGridP>Apps</ResponsiveGridP>
              <ResponsiveGridP>Blog</ResponsiveGridP>
              <ResponsiveGridP>Help Center</ResponsiveGridP>
              <ResponsiveGridP>Events</ResponsiveGridP>
            </ResponsiveDropdown4>
          </ResponsiveGrid>
          <ResponsiveGrid>
            <ResponsiveGridContent>
              <ResponsiveGridContentH4>COMPANY</ResponsiveGridContentH4>
              <ArrowDown
                onClick={companyToggle}
                companyClicked={companyClicked}
              />
            </ResponsiveGridContent>
            <ResponsiveDropdown5 companyClicked={companyClicked}>
              <ResponsiveGridP>About Us</ResponsiveGridP>
              <ResponsiveGridP>Leadership</ResponsiveGridP>
              <ResponsiveGridP>Investor Relations</ResponsiveGridP>
              <ResponsiveGridP>News</ResponsiveGridP>
              <ResponsiveGridP>Media Kit</ResponsiveGridP>
              <ResponsiveGridP>Careers</ResponsiveGridP>
            </ResponsiveDropdown5>
          </ResponsiveGrid>

        </ResponsiveGridContainer>
        <ResponsiveHr />
        <ResponsiveButtonContainer>
          <DownloadIcon />
          <DownloadText>Download Slack</DownloadText>
        </ResponsiveButtonContainer>
        <ResponsiveIconContainer>
          <TwitterIcon />
          <FacebookIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </ResponsiveIconContainer>
        <ResponsiveDetailContainer>
          <ResponsiveP>Status</ResponsiveP>
          <ResponsiveP>Privacy & Terms</ResponsiveP>
          <ResponsiveP>Contact Us</ResponsiveP>
          <ResponsiveP>
            Change Region <GlobeIcon /> <ArrowDown />
          </ResponsiveP>
        </ResponsiveDetailContainer>
        <ResponsiveParaphContainer>
          <ResponsiveBottomParagraph>
            &copy; Copyright 2021 Slack Technologies, Inc. All rights reserved.

          </ResponsiveBottomParagraph>
          <ResponsiveSpan>
            Various trademarks held by their respective owners
          </ResponsiveSpan>
        </ResponsiveParaphContainer>

      </ResponsiveContainer>
    </ResponsiveWrapperContainer>
  );
}

export default FooterResponsive;
