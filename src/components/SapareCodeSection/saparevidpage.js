import React from 'react'
import { ImgWrap, ServicesBack, ServicesContainer, ServicesH1 } from './ServicesElements';
import {Link} from 'react-router-dom';
import Saparevid from './Saparevideo';

const Saparevidpage = () => {

    return (
        <ServicesContainer id="services">
            <Link to='/' className='gobackbutton'><ServicesBack>← go back</ServicesBack></Link>
            <ServicesH1>sapare project</ServicesH1>
            <ImgWrap>
                <Saparevid />
            </ImgWrap>
        </ServicesContainer>
    )
}

export default Saparevidpage;