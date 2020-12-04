import styled from 'styled-components'
import Highlight from 'react-highlight.js';

export const ServicesContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ebf5fc;
    padding-bottom: 4vh;

    @media screen and (max-width: 768px){
        height: auto;
    }

    @media screen and (max-width: 480px){
        height: auto;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 50px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        max-width: 800px;
    }

    @media screen and (max-width: 768px){
        max-width: 500px;
    }
`

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
    border-radius: 10px;
    max-height: auto;
    max-width: 800px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    // transition: all 0.2s ease-in-out;

    // &:hover{
    //     transform: scale(1.02);
    //     transition: all 0.2s ease-in-out;
    //     cursor: pointer;
    // }

    @media screen and (max-width: 480px){
        max-width: 200px;
        padding: 10px;
    }
`

export const ServicesImgSet = styled.div`
    position: relative;
    display: flex;
    justify-self: center;
    align-items: center;
    margin-bottom: 1rem;
    min-width: 700px;
    min-height: 650px;
    justify-content: center;
`

export const ServicesDesc = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
    border-radius: 10px;
    max-height: auto;
    max-width: 1200px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    font-size: 0.9rem;
    line-height: 1.6;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 480px){
        max-width: 200px;
        padding: 10px;
    }
`

export const ServicesIcon = styled.img`
    height: 540px;
    width: 420px;
    margin-bottom: 10px;
    object-fit: cover;

    @media screen and (max-width: 480px){
        height: 360px;
        width: 240px;
        padding: 10px;
    }
`

export const ServicesBack = styled.h2`
    font-size: 1.5rem;
    color: #000;
    margin-top: 20px;
    position: relative;
    cursor: pointer;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }

    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
    }
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;
    margin-top: 30px;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
    white-space: wrap;
`

export const ServicesBorder = styled.hr`
    margin: 2rem;
    width: 47vw;

    @media screen and (max-width: 1600px){
        width: 70vw;
    }
`

export const ServicesHighlight = styled(Highlight)`
    max-width: 800px;
    justify-self: center;
    font-size: 1rem;

    @media screen and (max-width: 1200px){
        max-width: 800px;
    }

    @media screen and (max-width: 768px){
        max-width: 600px;
    }

    @media screen and (max-width: 480px){
        max-width: 300px;
    }
`