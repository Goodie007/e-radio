'use client';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
//import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import "react-h5-audio-player/lib/styles.css";
import { RadioBrowserApi } from 'radio-browser-api';
import RadioPic from '@/assets/images/RadioPic';
import styles from './page.module.css';
import './radio.css';

const radioPic = require("../assets/images/radio.png")


export default function Radio(){
    const [stations, setStations] = useState<any[]>();
    const [filterStations, setFilterStations] = useState("all");

    useEffect(() => {
        setApi (filterStations)
        .then((data) => {
            return setStations(data);
        })
    },[filterStations])

    const setApi = async (filterStations: string) => {
        const api = new RadioBrowserApi(fetch.bind(window), "musikweb");

        const stations = await api.searchStations({
            language: "english",
            tag: filterStations,
            limit: 30,
        })
        .then(data => {
            return data
        })

        return stations;
    }

    const setDefaultSrc = (e: any) => {
        e.target.src = RadioPic
    }

    //const setRadio = async (filterStations: string) => {
      //  const RadioBrowser = require('radio-browser')

       //let filter = {
        //limit: 30,
        //by: filterStations,
        //searchterm: filterStations,
      // }
       //RadioBrowser.getStations(filter)
       //.then((data:any) => console.log(data))
       //.catch((error: any) => console.log(error))

        //return RadioBrowser;
    //}

    


    const filters = [
        "all",
        "classical",
        "country",
        "dance",
        "disco",
        "house",
        "jazz",
        "pop",
        "rap",
        "retro",
        "rock",
      ];

    const Button = styled.h1`
        color: red;
    `;

    const Wrapper = styled.section`
       
        width: 100%;
    `
    const Filter = styled.div`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 2em;
        font-size: 1.2rem;
        width: 100%;
    `
    const Stations = styled.div`
         display: grid;
         grid-template-columns: repeat(3, 33%);
         width: 100%;
    `;

    return (
        <Wrapper>
            <Filter>
               {filters.map((filter, v) => (
                // eslint-disable-next-line react/jsx-key
                <span
                   className={filterStations === filter ? "selected" : ""}
                   //className={styles.span}
                    onClick={() => setFilterStations(filter)}>
                        {filter}
                </span>
               ))}
            </Filter>
            <Stations>
                {stations && stations.map((i: any, d: any) => {
                    return (
                        <><div className='station' key={i}>
                            <div className='stationName'>
                                <image 
                                    src={i.favicon} 
                                    alt="default"
                                    onError={setDefaultSrc}
                                    className='img'
                                />
                            </div>
                            <div className='name'>{i.name}</div>
                        </div>
                        <AudioPlayer
                            autoPlay
                            src={i.urlResolved}
                            onPlay={_e => console.log("onPlay")}
                            showJumpControls={false}
                            layout='stacked'
                            customProgressBarSection={[]}
                            autoPlayAfterSrcChange={false} 
                            customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                            className={styles.audioPlayer}
                         />
                        </>
                    )
                })}
            </Stations>
        </Wrapper>
    )
}