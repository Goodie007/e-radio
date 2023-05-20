'use client';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
//import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import "react-h5-audio-player/lib/styles.css";
import { RadioBrowserApi } from 'radio-browser-api';
//import RadioPic from '@/assets/images/RadioPic';

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

        return stations;
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
    return (
        <div>
            <Button>hello</Button>
            <div>
               {filters.map((filter, v) => (
                // eslint-disable-next-line react/jsx-key
                <span
                    className={filterStations === filter ? "selected" : ""}
                    onClick={() => setFilterStations(filter)}>{filter}</span>
               ))}
            </div>
            <div>
                {stations && stations.map((i: any, d: any) => {
                    return (
                        <div key={i}>
                            <div>
                                <image src={radioPic}  />
                            </div>
                            <div>{i.name}</div>
                        </div>
                    )
                })}
            </div>
            <AudioPlayer
                autoPlay
                src={stations.urlResolved}
                onPlay={e => console.log("onPlay")}
                // other props here
            />
        </div>
    )
}