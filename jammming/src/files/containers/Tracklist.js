import React from 'react';
import styles from './styles/Tracklist.module.css';
import Track from './Track.js';

function Tracklist (props) {
    return (
        <section>
            {props.tracks.map((track) => (
                <Track 
                    trackObject = {track} 
                    key={track.id} 
                    isRemoval={props.isRemoval} 
                    onAdd={props.onAdd}
                    onRemove={props.onRemove}
                />
            ))}
        </section>
    );
};

export default Tracklist;