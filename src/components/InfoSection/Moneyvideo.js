import React from 'react';
import VideoPlayer from 'react-video-js-player'
import Moneymp4 from '../../videos/moneymoney.mp4'
import './Moneycss.css'

const Moneyvid = () => {
    const videoSrc = Moneymp4;
    return (
        <div>
            <VideoPlayer
             src={videoSrc}
             autoplay='false'
             controls='true'
             playbackRates={[0.5, 1, 1.5, 2, 4]}
             preload='auto'
            />
        </div>
    );
};

export default Moneyvid;