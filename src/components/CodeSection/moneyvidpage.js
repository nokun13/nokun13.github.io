import React from 'react'
import Moneyvid from './Moneyvideo';
import { ImgWrap, ServicesBack, ServicesContainer, ServicesH1, ServicesH2 } from './ServicesElements';
import {Link} from 'react-router-dom';

const Moneyvidpage = () => {

    return (
        <ServicesContainer id="services">
            <Link to='/' className='gobackbutton'><ServicesBack>← go back</ServicesBack></Link>
            <ServicesH1>moneymoney project</ServicesH1>
            <ServicesH2>If the video doesn't load, try switching pages please!</ServicesH2>
            <ImgWrap>
                <Moneyvid />
            </ImgWrap>
        </ServicesContainer>
    )
}

export default Moneyvidpage;