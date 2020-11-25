import React from 'react'
import Icon1 from '../../images/moneycode-1.jpg'
import Icon2 from '../../images/moneycode-2.jpg'
import {ServicesContainer, ServicesBack, ServicesH1, ServicesWrapper,
ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';
import {Link} from 'react-router-dom';
import './Moneycss.css'

const Moneycode = () => {
    return (
        <ServicesContainer id="services">
            <Link to='/' className='gobackbutton'><ServicesBack>← go back</ServicesBack></Link>
            <ServicesH1>moneymoney code</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Login Page</ServicesH2>
                    <ServicesP>프로그램 실행 시 나오는 메인화면</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesH2>
                        {`html { background: red; }`}<br/>
                        {`body { color: blue; }`}<br/>
                    </ServicesH2>
                    <ServicesP>Code Description</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Page Info</ServicesH2>
                    <ServicesP>Page About</ServicesP>
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