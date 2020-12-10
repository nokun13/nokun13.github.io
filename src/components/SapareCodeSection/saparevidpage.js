import React from 'react'
import { ImgWrap, ServicesBack, ServicesContainer, ServicesH1, ServicesH2 } from './ServicesElements';
import {Link} from 'react-router-dom';
import Saparevid from './Saparevideo';

const Saparevidpage = () => {

    return (
        <ServicesContainer id="services">
            <Link to='/' className='gobackbutton'><ServicesBack>← go back</ServicesBack></Link>
            <ServicesH1>sapare project</ServicesH1>
            <ServicesH2>If the video doesn't load, try switching pages please!</ServicesH2>
            <ImgWrap>
                <Saparevid />
            </ImgWrap>
        </ServicesContainer>
    )
}

export default Saparevidpage;