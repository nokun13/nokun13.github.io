import React from 'react'
import {Link} from 'react-router-dom'
import {
    BtnWrap, Column1, Column2, Heading,
    InfoContainer, InfoRow, InfoWrapper,
    Subtitle, TextWrapper, TopLine
} from './InfoElements'
import './Buttoncss.css'
import image from '../../images/gray2.jpg';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText,
darkText, headline, description, buttonLabel, primary, dark, dark2}) => {

    const borderStyle = {
        background: "rgba(0,0,0,0.2)",
        borderRadius: "2em",
        backdropFilter: "blur(20px)",
        border: "solid 1px transparent",
        backgroundClip: "padding-box",
        boxShadow: "20px 20px 20px rgba(20,20,20,0.2)",
    };

    const backgroundImage = {
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${image})`
    }

    return (
        <>
            <InfoContainer style={backgroundImage} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper style={borderStyle}>
                                <div style={{padding: '3rem'}}>
                                    <TopLine>{topLine}</TopLine>
                                    <TopLine>5 days of coding</TopLine>
                                    <Heading lightText={lightText}>{headline}</Heading>
                                    <Subtitle darkText={darkText}>{description}</Subtitle>
                                    <BtnWrap>
                                        <Link to='/moneycode'
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
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection;