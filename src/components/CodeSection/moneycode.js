import React from 'react'
import Icon1 from '../../images/moneycode-1.jpg'
import Icon2 from '../../images/moneycode-2.jpg'
import {ServicesContainer, ServicesBack, ServicesH1, ServicesWrapper,
ServicesCard, ServicesIcon, ServicesH2, ServicesP, ServicesBorder, ServicesHighlight, ServicesDesc} from './ServicesElements';
import {Link} from 'react-router-dom';
import './Moneycss.css'

const Moneycode = ({loginCode,loginDesc,loginDesc2,loginDesc3}) => {

    return (
        <ServicesContainer id="services">
            <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/railscasts.css" />
            <Link to='/' className='gobackbutton'><ServicesBack>← go back</ServicesBack></Link>
            <ServicesH1>moneymoney project</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Login Page</ServicesH2>
                    <ServicesP>로그인 화면</ServicesP>
                </ServicesCard>
                <ServicesHighlight language='java'>
                    {loginCode}
                </ServicesHighlight>
                <ServicesDesc>
                    {loginDesc}
                </ServicesDesc>
                <ServicesDesc>
                    {loginDesc2}
                </ServicesDesc>
                <ServicesDesc>
                    {loginDesc3}
                </ServicesDesc>
            </ServicesWrapper>
                <ServicesBorder />
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Main Page</ServicesH2>
                    <ServicesP>메인 화면</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesH2>
                        {`html { background: red; }`}<br/>
                        {`body { color: blue; }`}<br/>
                    </ServicesH2>
                    <ServicesP>Code Description</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>

    )
}

export default Moneycode