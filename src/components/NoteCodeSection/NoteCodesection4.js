import React from 'react';
import {ServicesWrapper, ServicesCard, ServicesH2, ServicesP,
    ServicesHighlight, ServicesDesc, ServicesImgSet} from './ServicesElements';
import './Notecss.css';
import { NoteImgSet4 } from '../SliderSection/NoteImages4';

const NoteCodesection4 = ({slides,postCode,postCode2,postDesc,postDesc2,postDesc3}) => {

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    };

    return (
        <ServicesWrapper>
            <ServicesCard>
                <ServicesImgSet>
                    {NoteImgSet4.map((slide, index) => {
                        return (
                            <img src={slide.image} alt='images' className="noteImg" />
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
