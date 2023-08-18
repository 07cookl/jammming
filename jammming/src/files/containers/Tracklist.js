import React, { useState, useEffect } from 'react';
// import styles from './styles/Tracklist.module.css';
import Track from './Track'
import {tracks} from '../mock-data/tracks'

function Tracklist () {
    const [tracks, setTracks] = useState([]);


    useEffect(() => {
        get('../mock-data/tracks').then((response) => setTracks(response.data));
    }, []);

    return (
        <>
        <nav>
            {tracks.map((track) => (
                <Track trackObject = {track} />
            ))}
        </nav>
        </>
    )
}

export default Tracklist