import React, {useState} from 'react';
import {ServicesWrapper, ServicesCard, ServicesH2, ServicesP,
    ServicesHighlight, ServicesDesc, ServicesImgSet} from './ServicesElements';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './Moneycss.css';
import { MoneyImgSet5 } from '../SliderSection/MoneyImages5';

const Codesection5 = ({slides,recordCode,recordCode2,recordDesc,recordDesc2,recordCode3,recordDesc3}) => {

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
                    {MoneyImgSet5.map((slide, index) => {
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
                <ServicesH2>Record Page</ServicesH2>
                <ServicesP>계좌 내역 화면</ServicesP>
            </ServicesCard>
            <ServicesHighlight language='java'>
                {recordCode}
            </ServicesHighlight>
            <ServicesDesc>
                {recordDesc}
            </ServicesDesc>
            <ServicesHighlight language='java'>
                {recordCode2}
            </ServicesHighlight>
            <ServicesDesc>
                {recordDesc2}
            </ServicesDesc>
            <ServicesHighlight language='java'>
                {recordCode3}
            </ServicesHighlight>
            <ServicesDesc>
                {recordDesc3}
            </ServicesDesc>
        </ServicesWrapper>
    )
}

export default Codesection5
