import React from 'react';
import styles from './styles/Track.module.css';

function Track (props) {
    return (
        <div className={styles.trackContainer}>
            <img className={styles.albumArt} src={props.trackObject.images.url} alt="Album Image" />
            <ul className={styles.trackInfo}>
                <li className={styles.songTitle}>{props.trackObject.name}</li>
                <li className={styles.artistName}>{props.trackObject.artist}</li>
                <li className={styles.albumName}>{props.trackObject.album}</li>
            </ul>
        </div>
    )
};

export default Track;