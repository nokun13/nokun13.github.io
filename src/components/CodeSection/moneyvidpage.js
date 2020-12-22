import React from 'react'
import Moneyvid from './Moneyvideo';
import { ImgWrap, ServicesBack, ServicesContainer, ServicesDesc, ServicesH1, ServicesH2, ServicesWrapper } from './ServicesElements';
import {Link} from 'react-router-dom';

const Moneyvidpage = () => {

    return (
        <ServicesContainer id="services">
            <Link to='/' className='gobackbutton'><ServicesBack>← go back</ServicesBack></Link>
            <ServicesH1>moneymoney project</ServicesH1>
            <ServicesH2>If the video doesn't load, try switching pages please!</ServicesH2>
            <ImgWrap>
                <Moneyvid />
            </ImgWrap>
            <ServicesWrapper>
                <ServicesDesc>
                    영상/페이지 로딩을 더욱 개선시키기 위하여 웹사이트에 구현되어 있는 사진과 영상들을
                    최대한 압축시켰습니다만 현재로서는 로딩이 조금 긴 편입니다. 로딩 시간을 최대한 줄여
                    개선시키겠습니다! 양해 부탁드립니다!
                </ServicesDesc>
                <ServicesDesc>
                    영상을 임베드 하기 위해서 react-video-js-player를 사용하였습니다.
                    유튜브의 링크를 연결시켜 영상을 재생시키거나 Video.js 영상재생 프레임워크를
                    사용해보았지만, 간단하며 불필요한 기능이나 외부 링크를 고려하지 않아도 되는
                    react-video-js-player가 제일로 적합하다고 믿어 사용하게 되었습니다.
                </ServicesDesc>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Moneyvidpage;