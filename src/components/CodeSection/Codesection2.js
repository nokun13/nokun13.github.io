import React, {useState} from 'react';
import {ServicesWrapper, ServicesCard, ServicesH2, ServicesP,
    ServicesHighlight, ServicesDesc, ServicesImgSet} from './ServicesElements';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './Moneycss.css';
import { MoneyImgSet2 } from '../SliderSection/MoneyImages2';

const Codesection2 = ({slides2,mainCode,mainDesc,mainDesc2}) => {

    const [current, setCurrent] = useState(0);
    const length = slides2.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    if(!Array.isArray(slides2) || slides2.length <= 0) {
        return null;
    };

    return (
        <ServicesWrapper>
            <ServicesCard>
                <ServicesImgSet>
                    <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
                    {MoneyImgSet2.map((slide, index) => {
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
                <ServicesH2>Main Page</ServicesH2>
                <ServicesP>메인 화면</ServicesP>
            </ServicesCard>
                <ServicesHighlight language='java'>
                {mainCode}
            </ServicesHighlight>
            <ServicesDesc>
                {mainDesc}
            </ServicesDesc>
            <ServicesDesc>
                {mainDesc2}
            </ServicesDesc>
        </ServicesWrapper>
    )
}

export default Codesection2
