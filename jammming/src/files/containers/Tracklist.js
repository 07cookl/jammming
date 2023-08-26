import React from 'react';
import styles from './styles/Tracklist.module.css';
import Track from './Track.js';

function Tracklist (props) {

    const tracklistRender = () => {
        if (props.isRemoval) {
    return (
        <section className={styles.tracklistPlaylist}>
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
    }
    return (
        <section className={styles.tracklistSearch}>
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
    return (
        tracklistRender()
    )
};

export default Tracklist;