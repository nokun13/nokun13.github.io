import React from 'react'
// import Icon1 from '../../images/saparecode-1.jpg'
// import Icon2 from '../../images/saparecode-2.jpg'
import {ServicesContainer, ServicesH1, ServicesWrapper,
ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';

const Saparecode = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>sapare code</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    {/* <ServicesIcon src={Icon1} /> */}
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
                <ServicesCard>
                    {/* <ServicesIcon src={Icon2} /> */}
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

export default Saparecode