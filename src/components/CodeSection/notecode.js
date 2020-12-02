import React from 'react'
import {ServicesContainer, ServicesH1, ServicesWrapper,
ServicesCard, ServicesH2, ServicesP} from './ServicesElements';

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