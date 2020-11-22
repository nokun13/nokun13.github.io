import React, {useState, useEffect} from 'react';
// installing react-icons for use from github repository: npm install react-icons --save
import { FaBars } from 'react-icons/fa';
// installing styled-components: npm install --save styled-components
import {
  Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu,
  NavItem, NavLinks
} from './NavbarElements';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({toggle}) => {

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 120){
      setScrollNav(true)
    } else{
      setScrollNav(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            My Portfolio
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='moneymoney'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >moneymoney</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='note'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >note</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='sapare'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >sapare</NavLinks>
            </NavItem>
          </NavMenu>
          {/* <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;
