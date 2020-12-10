import React from 'react'
import Notevid from './Notevideo';
import { ImgWrap, ServicesBack, ServicesContainer, ServicesH1, ServicesH2 } from './ServicesElements';
import {Link} from 'react-router-dom';

const Notevidpage = () => {

    return (
        <ServicesContainer id="services">
            <Link to='/' className='gobackbutton'><ServicesBack>← go back</ServicesBack></Link>
            <ServicesH1>note project</ServicesH1>
            <ServicesH2>If the video doesn't load, try switching pages please!</ServicesH2>
            <ImgWrap>
                <Notevid />
            </ImgWrap>
        </ServicesContainer>
    )
}

export default Notevidpage;