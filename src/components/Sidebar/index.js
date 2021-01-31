import React from 'react';
import {
  SidebarMainContainer,
  SidebarContainer,
  SidebarTopContainer,
  SidebarTopMenu,
  SidebarTopItem,
  SidebarTopLink,
  SidebarTopLinkHr,
  Icon,
  CloseIcon,
  SidebarBottomContainer,
  SidebarBottomLogo,
  SidebarBottomP,
} from './SidebarElements';
function Sidebar({toggle, isOpen}) {
  return (
    <SidebarMainContainer isOpen={isOpen} onClick={toggle}>
      <SidebarContainer>
        <SidebarTopContainer>
          <SidebarTopMenu>
            <SidebarTopItem>
              <SidebarTopLink>For Developers</SidebarTopLink>
            </SidebarTopItem>
            <SidebarTopItem>
              <SidebarTopLink>Get Started</SidebarTopLink>
            </SidebarTopItem>
            <SidebarTopItem>
              <SidebarTopLinkHr />
            </SidebarTopItem>
            <SidebarTopItem>
              <SidebarTopLink>Download Slack</SidebarTopLink>
            </SidebarTopItem>
          </SidebarTopMenu>
          <Icon onClick={toggle}>
            <CloseIcon />
          </Icon>
        </SidebarTopContainer>
        <SidebarBottomContainer>
          <SidebarBottomLogo />
          <SidebarBottomP>slack</SidebarBottomP>
        </SidebarBottomContainer>
      </SidebarContainer>
    </SidebarMainContainer>
  );
}

export default Sidebar;
