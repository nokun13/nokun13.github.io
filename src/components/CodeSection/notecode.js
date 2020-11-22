import React from 'react'
// import Icon1 from '../../images/notecode-1.jpg'
// import Icon2 from '../../images/notecode-2.jpg'
import {ServicesContainer, ServicesH1, ServicesWrapper,
ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';

const Notecode = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>note code</ServicesH1>
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

export default Notecode