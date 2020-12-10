import React from 'react';
import {ServicesWrapper, ServicesCard, ServicesH2, ServicesP,
    ServicesHighlight, ServicesDesc, ServicesImgSet} from './ServicesElements';
import './Notecss.css';
import { NoteImgSet3 } from '../SliderSection/NoteImages3';

const NoteCodesection3 = ({slides,mainCode,mainDesc}) => {

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    };

    return (
        <ServicesWrapper>
            <ServicesCard>
                <ServicesImgSet>
                    {NoteImgSet3.map((slide, index) => {
                        return (
                            <img src={slide.image} alt='images' className="noteImg" />
                        );
                    })}
                </ServicesImgSet>
                <ServicesH2>Main Page</ServicesH2>
                <ServicesP>메인 화면</ServicesP>
            </ServicesCard>
            <ServicesHighlight language='java'>
                {mainCode}
            </ServicesHighlight>
            <ServicesDesc>
                {mainDesc}
            </ServicesDesc>
        </ServicesWrapper>
    )
}

export default NoteCodesection3
