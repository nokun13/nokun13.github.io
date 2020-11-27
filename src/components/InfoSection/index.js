import React from 'react'
import {Link} from 'react-router-dom'
import {
    BtnWrap, Column1, Column2, Heading, ImgWrap,
    InfoContainer, InfoRow, InfoWrapper,
    Subtitle, TextWrapper, TopLine
} from './InfoElements'
import Moneyvid from './Moneyvideo.js'
import './Buttoncss.css'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText,
darkText, headline, description, buttonLabel, primary, dark, dark2}) => {

    // const [offsetY, setOffsetY] = useState(0);
    // const handleScroll = () => setOffsetY(window.pageYOffset);

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);

    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    const borderStyle = {
        borderTop: "2px solid black",
        borderLeft: "2px solid black",
        transform: "translateX(-5%) translateY(-15%)"
    };

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper style={borderStyle}>
                                <div style={{padding: '2rem'}}>
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
                            <ImgWrap style={{ transform: "translateX(5%) translateY(15%)"}}>
                                <Moneyvid />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection;