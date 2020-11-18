import React from 'react'
import { Button } from '../ButtonElement'
import {
    BtnWrap, Column1, Column2, Heading, ImgWrap,
    InfoContainer2, InfoRow, InfoWrapper,
    Subtitle, TextWrapper, TopLine
} from './InfoElements'
import Saparevid from './Saparevideo.js'

const InfoSection3 = ({lightBg, id, imgStart, topLine, lightText,
darkText, headline, description, buttonLabel, primary, dark, dark2}) => {
    return (
        <>
            <InfoContainer2 lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
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