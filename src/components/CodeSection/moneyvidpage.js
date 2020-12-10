import React from 'react'
import Moneyvid from './Moneyvideo';
import { ImgWrap, ServicesBack, ServicesContainer, ServicesH1 } from './ServicesElements';
import {Link} from 'react-router-dom';

const Moneyvidpage = () => {

    return (
        <ServicesContainer id="services">
            <Link to='/' className='gobackbutton'><ServicesBack>← go back</ServicesBack></Link>
            <ServicesH1>moneymoney project</ServicesH1>
            <ImgWrap>
                <Moneyvid />
            </ImgWrap>
        </ServicesContainer>
    )
}

export default Moneyvidpage;