import React, {useState} from 'react';
import {ServicesWrapper, ServicesCard, ServicesH2, ServicesP, ServicesDesc, ServicesImgSet} from './ServicesElements';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './Saparecss.css';
import { SapareImgSet5 } from '../SliderSection/SapareImages5';

const SapareCodesection5 = ({slides,uploadDesc}) => {

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
                    {SapareImgSet5.map((slide, index) => {
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
                <ServicesH2>Item Upload Page</ServicesH2>
                <ServicesP>상품 등록 화면</ServicesP>
            </ServicesCard>
            <ServicesDesc>
                {uploadDesc}
            </ServicesDesc>
        </ServicesWrapper>
    )
}

export default SapareCodesection5
