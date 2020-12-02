import React, {useState} from 'react';
import {ServicesWrapper, ServicesCard, ServicesH2, ServicesP,
    ServicesHighlight, ServicesDesc, ServicesImgSet} from './ServicesElements';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './Moneycss.css';
import { MoneyImgSet4 } from '../SliderSection/MoneyImages4';

const Codesection4 = ({slides,inputCode,inputCode2,inputDesc,inputDesc2,inputDesc3}) => {

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
                    {MoneyImgSet4.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (
                                    <img src={slide.image} alt='login images' className="moneyImg" />
                                )}
                            </div>
                        );
                    })}
                    <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
                    </ServicesImgSet>
                <ServicesH2>Input Page</ServicesH2>
                <ServicesP>입금/출금 화면</ServicesP>
            </ServicesCard>
            <ServicesHighlight language='java'>
                {inputCode}
            </ServicesHighlight>
            <ServicesDesc>
                {inputDesc}
            </ServicesDesc>
            <ServicesHighlight language='java'>
                {inputCode2}
            </ServicesHighlight>
            <ServicesDesc>
                {inputDesc2}
            </ServicesDesc>
            <ServicesDesc>
                {inputDesc3}
            </ServicesDesc>
        </ServicesWrapper>
    )
}

export default Codesection4
