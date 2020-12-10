import React from 'react'
import {ServicesContainer, ServicesBack, ServicesH1,ServicesBorder} from './ServicesElements';
import {Link} from 'react-router-dom';
import SapareCodesection1 from './SapareCodesection1';
import { sapareHighlight1 } from './saparecode-highlight1';
import SapareCodesection2 from './SapareCodesection2';
import { sapareHighlight2 } from './saparecode-highlight2';
import SapareCodesection3 from './SapareCodesection3';
import { sapareHighlight3 } from './saparecode-highlight3';
import { sapareHighlight4 } from './saparecode-highlight4';
import SapareCodesection4 from './SapareCodesection4';
import SapareCodesection5 from './SapareCodesection5';
import { sapareHighlight5 } from './saparecode-highlight5';
import SapareCodesection6 from './SapareCodesection6';
import { sapareHighlight6 } from './saparecode-highlight6';
import SapareCodesection7 from './SapareCodesection7';
import { sapareHighlight7 } from './saparecode-highlight7';

const Saparecode = () => {
    return (
        <ServicesContainer id="services">
            <ServicesContainer id="services">
            <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/railscasts.css" />
            <Link to='/' className='gobackbutton'><ServicesBack>← go back</ServicesBack></Link>
            <ServicesH1>sapare project</ServicesH1>
            <SapareCodesection1 {...sapareHighlight1}/>
            <ServicesBorder />
            <SapareCodesection2 {...sapareHighlight2}/>
            <ServicesBorder />
            <SapareCodesection3 {...sapareHighlight3}/>
            <ServicesBorder />
            <SapareCodesection4 {...sapareHighlight4}/>
            <ServicesBorder />
            <SapareCodesection5 {...sapareHighlight5}/>
            <ServicesBorder />
            <SapareCodesection6 {...sapareHighlight6}/>
            <ServicesBorder />
            <SapareCodesection7 {...sapareHighlight7}/>
        </ServicesContainer>
        </ServicesContainer>
    )
}

export default Saparecode