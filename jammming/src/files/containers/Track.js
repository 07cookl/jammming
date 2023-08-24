import React, { useCallback } from 'react';
import styles from './styles/Track.module.css';

function Track (props) {
    const addTrack = useCallback(
        (event) => {props.onAdd(props.trackObject)}, 
        [props.trackObject, props.onAdd]);

    const removeTrack = useCallback(
        (event) => {props.onRemove(props.trackObject)}, 
        [props.trackObject, props.onRemove]);

    const buttonRender = () => {
        if (props.isRemoval) {
            return (
                <button className={styles.actionButton} onClick={removeTrack} >
                    Remove from Playlist
                </button>
            )
            }
            return (
                    <button className={styles.actionButton} onClick={addTrack}>
                        Add to Playlist
                    </button>
                )
        }

    return (
        <div className={styles.trackContainer} >
            <img className={styles.albumArt} src={props.trackObject.artwork} alt="Album Image" />
            <div className={styles.infoContainer}>
                <div className={styles.trackInfo}>
                    <p className={styles.songTitle}>{props.trackObject.name}</p>
                    <p className={styles.artistName}>{props.trackObject.artist}</p>
                    <p className={styles.albumName}>{props.trackObject.album}</p>
                </div>
                {buttonRender()}
            </div>
        </div>
    )
};

export default Track;