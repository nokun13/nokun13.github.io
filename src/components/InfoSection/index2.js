import React from 'react'
import {Link} from 'react-router-dom'
import {
    BtnWrap, Column1, Column2, Heading, ImgWrap,
    InfoContainer, InfoRow, InfoWrapper,
    Subtitle, TextWrapper, TopLine
} from './InfoElements'
import Notevid from './Notevideo.js';
import image from '../../images/blue2.jpg';

const InfoSection2 = ({lightBg, id, imgStart, topLine, lightText,
darkText, headline, description, buttonLabel, primary, dark, dark2}) => {

    // const [offsetY, setOffsetY] = useState(0);
    // const handleScroll = () => setOffsetY(window.pageYOffset);

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);

    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    const borderStyle = {
        background: "rgba(172,218,231,0.2)",
        borderRadius: "2em",
        backdropFilter: "blur(20px)",
        border: "solid 1px transparent",
        backgroundClip: "padding-box",
        boxShadow: "20px 20px 20px rgba(60,60,60,0.2)",
    };

    const backgroundImage = {
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "0% 15%",
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
                                    <TopLine style={{color: '#fff'}}>{topLine}</TopLine>
                                    <TopLine style={{color: '#fff'}}>2 weeks of coding</TopLine>
                                    <Heading lightText={lightText}>{headline}</Heading>
                                    <Subtitle darkText={darkText}>{description}</Subtitle>
                                    <BtnWrap>
                                    <Link to='/notecode'
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
                                <Notevid />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection2;