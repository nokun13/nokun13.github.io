import React, {useState} from 'react';
import {ServicesWrapper, ServicesCard, ServicesH2, ServicesP,
    ServicesHighlight, ServicesDesc, ServicesImgSet} from './ServicesElements';
import './Notecss.css';
import { NoteImgSet2 } from '../SliderSection/NoteImages2';

const NoteCodesection2 = ({slides,signupCode,signupDesc}) => {

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
                    {NoteImgSet2.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (
                                    <img src={slide.image} alt='images' className="noteImg" />
                                )}
                            </div>
                        );
                    })}
                </ServicesImgSet>
                <ServicesH2>Signup Setting Page</ServicesH2>
                <ServicesP>회원가입 정보수정 화면</ServicesP>
            </ServicesCard>
            <ServicesHighlight language='java'>
                {signupCode}
            </ServicesHighlight>
            <ServicesDesc>
                {signupDesc}
            </ServicesDesc>
        </ServicesWrapper>
    )
}

export default NoteCodesection2
