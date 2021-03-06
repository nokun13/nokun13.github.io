import styled from 'styled-components';
// installing react-router-dom: npm install react-router-dom
import { Link as LinkRouter } from 'react-router-dom';
// installing react-scroll: npm install react-scroll
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#363131' : 'transparent')};
    height: 8vh;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: 0.8s all ease;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkRouter)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width:768px) {
        display: block;
        position: absolute;
        right: 0;
        transform: translate(-100%, 40%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }

    @media screen and (max-width:480px) {
        display: block;
        position: absolute;
        top: -1vh;
        right: 0;
        transform: translate(-100%, 40%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }

    @media screen and (max-width:375px) {
        display: block;
        position: absolute;
        align-items: center;
        right: 0;
        transform: translate(-100%, 40%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }

    @media screen and (max-width:368px) {
        display: block;
        position: absolute;
        align-items: center;
        right: 0;
        transform: translate(-100%, 40%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }

`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    height: 100%;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 100%;
`

export const NavLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: 0.2s ease-out;

    &.active {
        border-bottom: 3px solid #31D5E7;
        color: #31D5E7;
    }

    &:hover {
        color: #31D5E7;
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 50px;
    background: #31D5E7;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`
