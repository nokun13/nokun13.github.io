import React, {useState} from 'react';
import {ServicesWrapper, ServicesCard, ServicesH2, ServicesP,
    ServicesHighlight, ServicesDesc, ServicesImgSet} from './ServicesElements';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './Saparecss.css';
import { SapareImgSet1 } from '../SliderSection/SapareImages1';

const SapareCodesection1 = ({slides,mainCode,mainCode2,mainDesc,mainDesc2,mainDesc3}) => {

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
                    {SapareImgSet1.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (
                                    <img src={slide.image} alt='images' className="sapareImg" />
                                )}
                            </div>
                        );
                    })}
                    <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
                </ServicesImgSet>
                <ServicesH2>Main Page</ServicesH2>
                <ServicesP>메인 화면</ServicesP>
            </ServicesCard>
            <ServicesDesc>
                {mainDesc}
            </ServicesDesc>
            <ServicesHighlight language='java'>
                {mainCode}
            </ServicesHighlight>
            <ServicesDesc>
                {mainDesc2}
            </ServicesDesc>
            <ServicesHighlight language='java'>
                {mainCode2}
            </ServicesHighlight>
            <ServicesDesc>
                {mainDesc3}
            </ServicesDesc>
        </ServicesWrapper>
    )
}

export default SapareCodesection1
