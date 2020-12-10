import React from 'react';
import {ServicesWrapper, ServicesCard, ServicesH2, ServicesP,
    ServicesHighlight, ServicesDesc, ServicesImgSet} from './ServicesElements';
import './Notecss.css';
import { NoteImgSet7 } from '../SliderSection/NoteImages7';

const NoteCodesection7 = ({slides,searchCode,searchDesc}) => {

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    };

    return (
        <ServicesWrapper>
            <ServicesCard>
                <ServicesImgSet>
                    {NoteImgSet7.map((slide, index) => {
                        return (
                            <img src={slide.image} alt='images' className="noteImg" />
                        );
                    })}
                </ServicesImgSet>
                <ServicesH2>Search Page</ServicesH2>
                <ServicesP>검색 화면</ServicesP>
            </ServicesCard>
            <ServicesHighlight language='java'>
                {searchCode}
            </ServicesHighlight>
            <ServicesDesc>
                {searchDesc}
            </ServicesDesc>
        </ServicesWrapper>
    )
}

export default NoteCodesection7
