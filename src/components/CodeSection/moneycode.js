import React from 'react'
import {ServicesContainer, ServicesBack, ServicesH1,ServicesBorder} from './ServicesElements';
import {Link} from 'react-router-dom';
import Codesection1 from './Codesection1';
import Codesection2 from './Codesection2';
import { moneyHighlight } from './moneycode-highlight';
import { moneyHighlight2 } from './moneycode-highlight2';
import { moneyHighlight3 } from './moneycode-highlight3';
import Codesection3 from './Codesection3';
import Codesection4 from './Codesection4';
import { moneyHighlight4 } from './moneycode-highlight4';
import Codesection5 from './Codesection5';
import { moneyHighlight5 } from './moneycode-highlight5';

const Moneycode = () => {

    return (
        <ServicesContainer id="services">
            <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/railscasts.css" />
            <Link to='/' className='gobackbutton'><ServicesBack>← go back</ServicesBack></Link>
            <ServicesH1>moneymoney project</ServicesH1>
            <Codesection1 {...moneyHighlight}/>
            <ServicesBorder />
            <Codesection2 {...moneyHighlight2}/>
            <ServicesBorder />
            <Codesection3 {...moneyHighlight3}/>
            <ServicesBorder />
            <Codesection4 {...moneyHighlight4}/>
            <ServicesBorder />
            <Codesection5 {...moneyHighlight5}/>
            <ServicesBorder />
        </ServicesContainer>
    )
}

export default Moneycode