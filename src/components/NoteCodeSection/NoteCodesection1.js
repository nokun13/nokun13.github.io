import React, {useState} from 'react';
import {ServicesWrapper, ServicesCard, ServicesH2, ServicesP,
    ServicesHighlight, ServicesDesc, ServicesImgSet} from './ServicesElements';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './Notecss.css';
import { NoteImgSet1 } from '../SliderSection/NoteImages';

const NoteCodesection1 = ({slides,loginCode,loginCode2,loginDesc,loginDesc2,loginDesc3,loginDesc4}) => {

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
                    {NoteImgSet1.map((slide, index) => {
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
                <ServicesH2>Login Page</ServicesH2>
                <ServicesP>로그인 화면</ServicesP>
            </ServicesCard>
            <ServicesDesc>
                {loginDesc}
            </ServicesDesc>
            <ServicesHighlight language='java'>
                {loginCode}
            </ServicesHighlight>
            <ServicesHighlight language='java'>
                {loginCode2}
            </ServicesHighlight>
            <ServicesDesc>
                {loginDesc2}
            </ServicesDesc>
            <ServicesDesc>
                {loginDesc3}
            </ServicesDesc>
        </ServicesWrapper>
    )
}

export default NoteCodesection1
