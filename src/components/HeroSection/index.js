import React, {useState, useEffect} from 'react'
import Image from '../../images/fallImg2.jpg';
import { HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1, HeroP,
HeroBtnWrapper, ArrowForward, ArrowRight, HeroButton } from './HeroElements';
import '../InfoSection/Buttoncss.css';
import ContactForm from '../ContactSection/ContactUs';

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <HeroContainer id='about'>
            <ContactForm showModal={showModal} setShowModal={setShowModal} />
            <HeroBg>
                <ImageBg src={Image} />
            </HeroBg>
            <HeroContent>
                <HeroH1 style={{ transform: `translateX(${offsetY * -0.2}px)`}}>
                Hi, I'm a Software Developer</HeroH1>
                <HeroP style={{ transform: `translateX(${offsetY * 0.2}px)`}}>
                    Welcome to Nok Hun Kim's Portfolio Website
                </HeroP>
                <HeroBtnWrapper>
                    <HeroButton onClick={openModal}
                    onMouseEnter={onHover}
                    onMouseLeave={onHover} primary='true' dark='true'>
                            Contact Me {hover ? <ArrowForward /> : <ArrowRight />}
                    </HeroButton>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
