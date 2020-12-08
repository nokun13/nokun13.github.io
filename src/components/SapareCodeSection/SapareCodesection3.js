import React, {useState} from 'react';
import {ServicesWrapper, ServicesCard, ServicesH2, ServicesP,
    ServicesHighlight, ServicesDesc, ServicesImgSet} from './ServicesElements';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './Saparecss.css';
import { SapareImgSet3 } from '../SliderSection/SapareImages3';

const SapareCodesection3 = ({slides,itemCode,itemCode2,itemDesc,itemDesc2}) => {

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
                    {SapareImgSet3.map((slide, index) => {
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
                <ServicesH2>Item View Page</ServicesH2>
                <ServicesP>상품 조회 화면</ServicesP>
            </ServicesCard>
            <ServicesHighlight language='java'>
                {itemCode}
            </ServicesHighlight>
            <ServicesDesc>
                {itemDesc}
            </ServicesDesc>
            <ServicesHighlight language='java'>
                {itemCode2}
            </ServicesHighlight>
            <ServicesDesc>
                {itemDesc2}
            </ServicesDesc>
        </ServicesWrapper>
    )
}

export default SapareCodesection3
