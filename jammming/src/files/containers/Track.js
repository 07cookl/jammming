import React, { useCallback } from 'react';
import styles from './styles/Track.module.css';

function Track (props) {
    const addTrack = useCallback(
        (event) => {props.onAdd(props.trackObject)}, 
        [props.trackObject, props.onAdd]);

    const removeTrack = useCallback(
        (event) => {props.onRemove(props.trackObject)}, 
        [props.trackObject, props.onRemove]);

    function convertTime(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return (
            seconds == 60 ?
            (minutes+1) + ":00" :
            minutes + ":" + (seconds < 10 ? "0" : "") + seconds
        );
        };

    const trackRender = () => {
        if (props.isRemoval) {

            return (
                <div className={styles.trackContainerPlaylist} >
                    <button className={styles.actionButtonRemove} onClick={removeTrack} >
                    -
                    </button>
                    <img className={styles.albumArtPlaylist} src={props.trackObject.artwork} alt="Album Image" />
                    <div className={styles.infoContainerPlaylist}>
                        <div className={styles.trackInfoPlaylist}>
                            <p className={styles.songTitlePlaylist}>{props.trackObject.name}</p>
                            <p className={styles.artistNamePlaylist}>{props.trackObject.artist}</p>
                        </div>
                        <div>
                            <p className={styles.durationPlaylist}>{convertTime(props.trackObject.duration)}</p>
                        </div>
                    </div>
                </div>
            )
            }
            return (
                <div className={styles.trackContainer} >
                    <img className={styles.albumArt} src={props.trackObject.artwork} alt="Album Image" />
                    <div className={styles.infoContainer}>
                        <div className={styles.trackInfo}>
                            <p className={styles.songTitle}>{props.trackObject.name}</p>
                            <p className={styles.artistName}>{props.trackObject.artist}</p>
                        </div>
                        <button className={styles.actionButtonAdd} onClick={addTrack}>
                            +
                        </button>
                    </div>
                </div>
                )
        }

        return (
            trackRender()
    )
};

export default Track;