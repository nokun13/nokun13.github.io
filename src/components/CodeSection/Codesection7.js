import React, {useState} from 'react';
import {ServicesWrapper, ServicesCard, ServicesH2, ServicesP,
    ServicesHighlight, ServicesDesc, ServicesImgSet} from './ServicesElements';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './Moneycss.css';
import { MoneyImgSet7 } from '../SliderSection/MoneyImages7';

const Codesection7 = ({slides,chattingCode,chattingCode2,chattingDesc,chattingDesc2,chattingDesc3}) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    };

    return (
        <ServicesWrapper>
            <ServicesCard>
                <ServicesImgSet>
                    <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
                    {MoneyImgSet7.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (
                                    <img src={slide.image} alt='images' className="moneyImg" />
                                )}
                            </div>
                        );
                    })}
                    <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
                    </ServicesImgSet>
                <ServicesH2>Chatting Page</ServicesH2>
                <ServicesP>채팅 화면</ServicesP>
            </ServicesCard>
            <ServicesHighlight language='java'>
                {chattingCode}
            </ServicesHighlight>
            <ServicesDesc>
                {chattingDesc}
            </ServicesDesc>
            <ServicesHighlight language='java'>
                {chattingCode2}
            </ServicesHighlight>
            <ServicesDesc>
                {chattingDesc2}
            </ServicesDesc>
            <ServicesDesc>
                {chattingDesc3}
            </ServicesDesc>
        </ServicesWrapper>
    )
}

export default Codesection7
