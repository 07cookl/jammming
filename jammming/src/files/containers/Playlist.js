import React, { useCallback } from 'react';
import styles from './styles/Playlist.module.css';
import Tracklist from './Tracklist.js';

function Playlist (props) {
    const handleNameChange = useCallback((event) => 
    {props.onNameChange(event.target.value)
    }, [props.onNameChange]);

    const totalTimeArr = props.playlistTracks.map(track => track.duration);
    const initialValue = 0;
    const totalTime = totalTimeArr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

    function convertTime(millis) {
        var hours = Math.floor(millis / 3600000)
        var minutes = Math.floor((millis % 3600000) / 60000).toFixed(0);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        if (hours == 0 && minutes == 0 && seconds == 0) {
            return;
        }
        if (hours == 0 && minutes == 0) {
            return (
                "Playlist Length: " + seconds + " seconds"
            );
        };
        if (hours == 0) {
        return (
            "Playlist Length: " + 
            (seconds == 60 ?
            (minutes+1) + " min" :
            minutes + (minutes == 1 ? " min " : " mins ") + seconds + (seconds == 1 ? " second" : " seconds"))
        );
        };
        return (
            "Playlist Length: " + 
            (minutes == 60 ?
            (hours+1) + (hours == 0 ? " hr" : " hrs") :
            hours + (hours == 1 ? " hr " : " hrs ") + minutes + " mins")
        )
        };

    return (
        <div className={styles.playlistContainer}>
            <div className={styles.playlistHeader}>
                <div>
                    <input className={styles.playlistName} onChange={handleNameChange} placeholder="Your Playlist Name" />
                    <p className={styles.playlistLength}>{convertTime(totalTime)}</p>
                </div>
            </div>
        <Tracklist 
            tracks={props.playlistTracks}
            isRemoval={true} 
            onRemove={props.onRemove} />
        <button className={styles.saveButton} onClick={props.onSave}>Save Playlist</button>
        </div>
    )
}

export default Playlist