import React from 'react';
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogoContainer, NavH3, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavButton } from './NavbarElements'

function Navbar ({toggle}) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogoContainer>
            <NavLogo></NavLogo>
            <NavH3><strong>slack</strong></NavH3>
          </NavLogoContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks>
                  For Developers
                </NavLinks>
                
              </NavItem>
              <NavButton>
                  Get Started
                </NavButton>
            </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
