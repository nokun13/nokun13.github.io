// rafce -> Ctrl + Space to autocomplete
import React from 'react'
import {
    SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu,
    SidebarLink
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="moneymoney" onClick={toggle}>
                        moneymoney
                    </SidebarLink>
                    <SidebarLink to="note" onClick={toggle}>
                        note
                    </SidebarLink>
                    <SidebarLink to="sapare" onClick={toggle}>
                        sapare
                    </SidebarLink>
                </SidebarMenu>
                {/* <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
