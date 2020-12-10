import React from 'react';
import VideoPlayer from 'react-video-js-player'
import Saparemp4 from '../../videos/sapare.mp4'
// import './Saparecss.css'

const Saparevid = () => {
    const videoSrc = Saparemp4;
    return (
        <div>
            <VideoPlayer
             src={videoSrc}
             autoPlay='false'
             controls='true'
             playbackRates={[0.5, 1, 1.5, 2, 4]}
             preload='auto'
            />
        </div>
    );
};

export default Saparevid;