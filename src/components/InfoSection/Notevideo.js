import React from 'react';
import VideoPlayer from 'react-video-js-player'
import Notemp4 from '../../videos/note.mp4'
// import './Notecss.css'

const Notevid = () => {
    const videoSrc = Notemp4;
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

export default Notevid;