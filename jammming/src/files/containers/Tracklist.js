import React, { useState, useEffect } from 'react';
import styles from './styles/Tracklist.module.css';
import Track from './Track.js';
import { get } from '../mock-data/fetch.js';

function Tracklist () {
    const [tracks, setTracks] = useState([]);


    useEffect(() => {
        get('/tracks').then((response) => setTracks(response.data));
    }, []);
    return (
        <>
        <nav>
            {tracks.map((track) => (
                <Track trackObject = {track} key={track.id} />
            ))}
        </nav>
        </>
    );
};

export default Tracklist;