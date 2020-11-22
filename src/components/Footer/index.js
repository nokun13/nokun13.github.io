import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa';
import { FooterContainer, FooterLink, FooterLinkItems,
    FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle,
    FooterWrap, SocialMedia, SocialMediaWrap,
    SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>made with ♪ and ☺ by Nok Hun Kim</FooterLinkTitle>
                            <FooterLink to='/contact'>Contact me</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            My Portfolio
                        </SocialLogo>
                        <WebsiteRights>
                            My Portfolio © {new Date().getFullYear()} All rights reserved to whomever made this
                            website, namely me, but it's okay if anyone
                            takes a bite out of this code :)
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink to="/nolink" target="_blank"
                            aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink to="/nolink" target="_blank"
                            aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink to="/nolink" target="_blank"
                            aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
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
