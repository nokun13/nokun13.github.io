import React from 'react';
import {ServicesWrapper, ServicesCard, ServicesH2, ServicesP,
    ServicesHighlight, ServicesDesc, ServicesImgSet} from './ServicesElements';
import './Notecss.css';
import { NoteImgSet2 } from '../SliderSection/NoteImages2';

const NoteCodesection2 = ({slides,signupCode,signupDesc}) => {

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    };

    return (
        <ServicesWrapper>
            <ServicesCard>
                <ServicesImgSet>
                    {NoteImgSet2.map((slide, index) => {
                        return (
                            <img src={slide.image} alt='images' className="noteImg" />
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
