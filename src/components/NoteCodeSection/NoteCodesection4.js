import React, {useState} from 'react';
import {ServicesWrapper, ServicesCard, ServicesH2, ServicesP,
    ServicesHighlight, ServicesDesc, ServicesImgSet} from './ServicesElements';
import './Notecss.css';
import { NoteImgSet4 } from '../SliderSection/NoteImages4';

const NoteCodesection4 = ({slides,postCode,postCode2,postDesc,postDesc2,postDesc3}) => {

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
                    {NoteImgSet4.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (
                                    <img src={slide.image} alt='images' className="noteImg" />
                                )}
                            </div>
                        );
                    })}
                </ServicesImgSet>
                <ServicesH2>Post Upload Page</ServicesH2>
                <ServicesP>게시물 작성 화면</ServicesP>
            </ServicesCard>
            <ServicesHighlight language='java'>
                {postCode}
            </ServicesHighlight>
            <ServicesDesc>
                {postDesc}
            </ServicesDesc>
        </ServicesWrapper>
    )
}

export default NoteCodesection4
