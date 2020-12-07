import React from 'react'
import {ServicesContainer, ServicesBack, ServicesH1,ServicesBorder} from './ServicesElements';
import {Link} from 'react-router-dom';
import SapareCodesection1 from './SapareCodesection1';
import { sapareHighlight1 } from './saparecode-highlight1';

const Saparecode = () => {
    return (
        <ServicesContainer id="services">
            <ServicesContainer id="services">
            <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/railscasts.css" />
            <Link to='/' className='gobackbutton'><ServicesBack>← go back</ServicesBack></Link>
            <ServicesH1>sapare project</ServicesH1>
            <SapareCodesection1 {...sapareHighlight1}/>
            <ServicesBorder />
        </ServicesContainer>
        </ServicesContainer>
    )
}

export default Saparecode