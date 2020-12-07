import React, {useState} from 'react';
import {ServicesWrapper, ServicesCard, ServicesH2, ServicesP,
    ServicesHighlight, ServicesDesc, ServicesImgSet} from './ServicesElements';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './Notecss.css';
import { NoteImgSet5 } from '../SliderSection/NoteImages5';

const NoteCodesection5 = ({slides,profileCode,profileDesc,profileDesc2}) => {

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
                    {NoteImgSet5.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (
                                    <img src={slide.image} alt='images' className="noteImg" />
                                )}
                            </div>
                        );
                    })}
                    <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
                </ServicesImgSet>
                <ServicesH2>Profile Page</ServicesH2>
                <ServicesP>프로필 화면</ServicesP>
            </ServicesCard>
            <ServicesHighlight language='java'>
                {profileCode}
            </ServicesHighlight>
            <ServicesDesc>
                {profileDesc}
            </ServicesDesc>
            <ServicesDesc>
                {profileDesc2}
            </ServicesDesc>
        </ServicesWrapper>
    )
}

export default NoteCodesection5
