import React, {useState} from 'react';
import {ServicesWrapper, ServicesCard, ServicesH2, ServicesP,
    ServicesHighlight, ServicesDesc, ServicesImgSet} from './ServicesElements';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './Notecss.css';
import { NoteImgSet6 } from '../SliderSection/NoteImages6';

const NoteCodesection6 = ({slides,postViewCode,postViewDesc}) => {

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
                    {NoteImgSet6.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (
                                    <img src={slide.image} alt='images' className="noteImg" />
                                )}
                            </div>
                        );
                    })}
                </ServicesImgSet>
                <ServicesH2>Post View Page</ServicesH2>
                <ServicesP>게시물 화면</ServicesP>
            </ServicesCard>
            <ServicesHighlight language='java'>
                {postViewCode}
            </ServicesHighlight>
            <ServicesDesc>
                {postViewDesc}
            </ServicesDesc>
        </ServicesWrapper>
    )
}

export default NoteCodesection6
