import React, {useState} from 'react';
import {ServicesWrapper, ServicesCard, ServicesH2, ServicesP,
    ServicesHighlight, ServicesDesc, ServicesImgSet} from './ServicesElements';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './Moneycss.css';
import { MoneyImgSet6 } from '../SliderSection/MoneyImages6';

const Codesection6 = ({slides,chartCode,chartCode2,chartDesc,chartDesc2}) => {

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
                    {MoneyImgSet6.map((slide, index) => {
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
                <ServicesH2>Chart Page</ServicesH2>
                <ServicesP>계좌 통계 화면</ServicesP>
            </ServicesCard>
            <ServicesHighlight language='java'>
                {chartCode}
            </ServicesHighlight>
            <ServicesDesc>
                {chartDesc}
            </ServicesDesc>
            <ServicesHighlight language='java'>
                {chartCode2}
            </ServicesHighlight>
            <ServicesDesc>
                {chartDesc2}
            </ServicesDesc>
        </ServicesWrapper>
    )
}

export default Codesection6
