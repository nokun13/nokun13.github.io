import React from 'react';
import {ServicesWrapper, ServicesCard, ServicesH2, ServicesP,
    ServicesHighlight, ServicesDesc, ServicesImgSet} from './ServicesElements';
import './Notecss.css';
import { NoteImgSet6 } from '../SliderSection/NoteImages6';

const NoteCodesection6 = ({slides,postViewCode,postViewDesc}) => {

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    };

    return (
        <ServicesWrapper>
            <ServicesCard>
                <ServicesImgSet>
                    {NoteImgSet6.map((slide, index) => {
                        return (
                            <img src={slide.image} alt='images' className="noteImg" />
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
