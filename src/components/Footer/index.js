import React from 'react'
import {FaLinkedin, FaGithub, FaReact} from 'react-icons/fa';
import { FooterContainer, FooterLink, FooterLinkItems,
    FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle,
    FooterWrap, SocialMedia, SocialMediaWrap,
    SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import {animateScroll as scroll} from 'react-scroll';
import ScrollToTopBtn from '../ScrollTopClass'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
        <ScrollToTopBtn />
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>made with <FaReact /> by Nok Hun Kim</FooterLinkTitle>
                            <FooterLink to="/" onClick={toggleHome}>Contact me</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            nk{'>'}portfolio
                        </SocialLogo>
                        <WebsiteRights>
                            nk{'>'}portfolio © {new Date().getFullYear()} All rights reserved to whomever made this
                            website, namely me, but it's okay if anyone
                            takes a bite out of this code :)
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.github.com/nokun13" target="_blank"
                            aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com/in/nok-hun-kim-a21068192/" target="_blank"
                            aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
