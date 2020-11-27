import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f0f8ff' : '#787878')};

    @media screen and (max-width: 1024px){
        padding: 100px 50px;
    }

    @media screen and (max-width: 480px){
        padding: 0;
    }
`

export const InfoContainer2 = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#F8FCFF' : '#787878')};

    @media screen and (max-width: 1024px){
        padding: 100px 50px;
    }

    @media screen and (max-width: 480px){
        padding: 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width:1024px){
        display: flex;
        justify-content: center;
        align-content: center;
        height: 100vh;
        width: 100vw;
    }

`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    width: 1300px;

    @media screen and (max-width: 1024px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

    @media screen and (max-width: 1024px){
        padding: 0;
    }
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;

    @media screen and (max-width: 1024px){
        padding: 0;
    }
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: #4CD7E4;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;

    @media screen and (max-width: 480px){
        font-size: 12px;
    }
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 45px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};
    white-space: nowrap;

    @media screen and (max-width: 480px){
        font-size: 24px;
    }

`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    white-space: normal;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};

    @media screen and (max-width: 480px){
        font-size: 14px;
        white-space: normal;
    }
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`