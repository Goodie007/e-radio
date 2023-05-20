'use client';
import React from 'react';
import { styled } from 'styled-components';
//import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player'




export default function Radio(){
    const Button = styled.h1`
        color: red;
    `;
    return (
        <div>
            <Button>hello</Button>
            <AudioPlayer
                autoPlay
                src="http://example.com/audio.mp3"
                onPlay={e => console.log("onPlay")}
                // other props here
            />
          
        </div>
    )
}