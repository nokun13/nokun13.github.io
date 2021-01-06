import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #363131;
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 100%;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 24px;
    margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 18px;

    &:hover{
        color: #31D5E7;
        transition: 0.3s ease-out;
    }
`

export const SocialMedia = styled.section`
    max-width: 1200px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: auto;
    margin: 20px auto 0 auto;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    white-space: nowrap;
    margin-right: 80px;

    @media screen and (max-width: 768px){
        margin-left: 10vw;
    }
`

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
    margin-right: 20px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
    width: 120px;
`

export const SocialIconLinkGithub = styled.a`
    color: #fff;
    font-size: 24px;

    &:hover{
        color: #2dba4e;
        transition: 0.3s ease-out;
    }
`

export const SocialIconLinkLinkedIn = styled.a`
    color: #fff;
    font-size: 24px;

    &:hover{
        color: #0077B5;
        transition: 0.3s ease-out;
    }
`