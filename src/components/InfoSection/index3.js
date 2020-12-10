import React from 'react'
import {Link} from 'react-router-dom'
import {
    BtnWrap, Column1, Column2, Heading, ImgWrap,
    InfoContainer2, InfoRow, InfoWrapper,
    Subtitle, TextWrapper, TopLine
} from './InfoElements'
import Saparevid from './Saparevideo.js';
import image from '../../images/green2.jpg';

const InfoSection3 = ({lightBg, id, imgStart, topLine, lightText,
darkText, headline, description, buttonLabel, primary, dark, dark2}) => {

    const borderStyle = {
        background: "rgba(7,41,68,0.2)",
        borderRadius: "2em",
        backdropFilter: "blur(20px)",
        border: "solid 1px transparent",
        backgroundClip: "padding-box",
        boxShadow: "20px 20px 20px rgba(47,47,47,0.2)",
    };

    const backgroundImage = {
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundImage: `url(${image})`
    }

    return (
        <>
            <InfoContainer2 style={backgroundImage} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper style={borderStyle}>
                                <div style={{padding: '3rem'}}>
                                    <TopLine>{topLine}</TopLine>
                                    <TopLine>5 weeks of coding</TopLine>
                                    <Heading lightText={lightText}>{headline}</Heading>
                                    <Subtitle darkText={darkText}>{description}</Subtitle>
                                    <BtnWrap>
                                        <Link to='/saparecode'
                                            className='linkAsButton'
                                            primary={primary ? 1 : 0}
                                            dark={dark ? 1 : 0}
                                            dark2={dark2 ? 1 : 0}>
                                                {buttonLabel}
                                        </Link>
                                    </BtnWrap>
                                </div>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Saparevid />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer2>
        </>
    )
}

export default InfoSection3;