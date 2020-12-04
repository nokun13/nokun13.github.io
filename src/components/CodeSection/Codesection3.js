import React, {useState} from 'react';
import {ServicesWrapper, ServicesCard, ServicesH2, ServicesP,
    ServicesHighlight, ServicesDesc, ServicesImgSet} from './ServicesElements';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './Moneycss.css';
import { MoneyImgSet3 } from '../SliderSection/MoneyImages3';

const Codesection3 = ({slides,mgrCode,mgrCode2,mgrDesc,mgrDesc2}) => {

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
                    {MoneyImgSet3.map((slide, index) => {
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
                <ServicesH2>Account Manager Page</ServicesH2>
                <ServicesP>계좌 관리 화면</ServicesP>
            </ServicesCard>
            <ServicesHighlight language='java'>
                {mgrCode}
            </ServicesHighlight>
            <ServicesDesc>
                {mgrDesc}
            </ServicesDesc>
            <ServicesHighlight language='java'>
                {mgrCode2}
            </ServicesHighlight>
            <ServicesDesc>
                {mgrDesc2}
            </ServicesDesc>
        </ServicesWrapper>
    )
}

export default Codesection3
