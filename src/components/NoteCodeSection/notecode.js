import React from 'react'
import {ServicesContainer, ServicesBack, ServicesH1,ServicesBorder} from './ServicesElements';
import {Link} from 'react-router-dom';
import NoteCodesection1 from './NoteCodesection1';
import { noteHighlight } from './notecode-highlight1';

const Notecode = () => {
    return (
        <ServicesContainer id="services">
            <ServicesContainer id="services">
            <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/railscasts.css" />
            <Link to='/' className='gobackbutton'><ServicesBack>← go back</ServicesBack></Link>
            <ServicesH1>note project</ServicesH1>
            <NoteCodesection1 {...noteHighlight}/>
            <ServicesBorder />
        </ServicesContainer>
        </ServicesContainer>
    )
}

export default Notecode