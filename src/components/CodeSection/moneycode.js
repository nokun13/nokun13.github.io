import React from 'react'
import {ServicesContainer, ServicesBack, ServicesH1,ServicesBorder} from './ServicesElements';
import {Link} from 'react-router-dom';
import Codesection1 from './Codesection1';
import Codesection2 from './Codesection2';

const Moneycode = () => {

    return (
        <ServicesContainer id="services">
            <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/railscasts.css" />
            <Link to='/' className='gobackbutton'><ServicesBack>← go back</ServicesBack></Link>
            <ServicesH1>moneymoney project</ServicesH1>
            <Codesection1 />
            <ServicesBorder />
            <Codesection2 />
        </ServicesContainer>
    )
}

export default Moneycode