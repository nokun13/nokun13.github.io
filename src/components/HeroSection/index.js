import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP,
HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='about'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome to Nok Hun Kim's Portfolio</HeroH1>
                <HeroP>
                    About me
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="contact" onMouseEnter={onHover}
                    onMouseLeave={onHover} primary='true' dark='true'>
                        Contact Me {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
