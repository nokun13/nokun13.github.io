import React from 'react'
import Notevid from './Notevideo';
import { ImgWrap, ServicesBack, ServicesContainer, ServicesH1, ServicesH2 } from './ServicesElements';
import {Link} from 'react-router-dom';

const Notevidpage = () => {

    return (
        <ServicesContainer id="services">
            <Link to='/' className='gobackbutton'><ServicesBack>← go back</ServicesBack></Link>
            <ServicesH1>note project</ServicesH1>
            <ServicesH2>Please wait a minute for the video to load!</ServicesH2>
            <ImgWrap>
                <Notevid />
            </ImgWrap>
        </ServicesContainer>
    )
}

export default Notevidpage;