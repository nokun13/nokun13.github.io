import React from 'react'
import {ServicesContainer, ServicesBack, ServicesH1,ServicesBorder} from './ServicesElements';
import {Link} from 'react-router-dom';
import NoteCodesection1 from './NoteCodesection1';
import { noteHighlight } from './notecode-highlight1';
import NoteCodesection2 from './NoteCodesection2';
import { noteHighlight2 } from './notecode-highlight2';
import NoteCodesection3 from './NoteCodesection3';
import { noteHighlight3 } from './notecode-highlight3';
import NoteCodesection4 from './NoteCodesection4';
import { noteHighlight4 } from './notecode-highlight4';
import { noteHighlight5 } from './notecode-highlight5';
import NoteCodesection5 from './NoteCodesection5';
import NoteCodesection6 from './NoteCodesection6';
import { noteHighlight6 } from './notecode-highlight6';
import { noteHighlight7 } from './notecode-highlight7';
import NoteCodesection7 from './NoteCodesection7';
import NoteCodesection8 from './NoteCodesection8';
import { noteHighlight8 } from './notecode-highlight8';

const Notecode = () => {
    return (
        <ServicesContainer id="services">
            <ServicesContainer id="services">
            <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/railscasts.css" />
            <Link to='/' className='gobackbutton'><ServicesBack>← go back</ServicesBack></Link>
            <ServicesH1>note project</ServicesH1>
            <NoteCodesection1 {...noteHighlight}/>
            <ServicesBorder />
            <NoteCodesection2 {...noteHighlight2}/>
            <ServicesBorder />
            <NoteCodesection3 {...noteHighlight3}/>
            <ServicesBorder />
            <NoteCodesection4 {...noteHighlight4}/>
            <ServicesBorder />
            <NoteCodesection6 {...noteHighlight6}/>
            <ServicesBorder />
            <NoteCodesection5 {...noteHighlight5}/>
            <ServicesBorder />
            <NoteCodesection7 {...noteHighlight7}/>
            <ServicesBorder />
            <NoteCodesection8 {...noteHighlight8}/>
        </ServicesContainer>
        </ServicesContainer>
    )
}

export default Notecode