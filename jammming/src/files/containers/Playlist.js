import React, { useCallback } from 'react';
import styles from './styles/Playlist.module.css';
import Tracklist from './Tracklist.js';

function Playlist (props) {
    const handleNameChange = useCallback((event) => 
    {props.onNameChange(event.target.value)
    }, [props.onNameChange]);

    return (
        <div>
        <input className={styles.playlistName} onChange={handleNameChange} placeholder="New Playlist" />
        <Tracklist 
            tracks={props.playlistTracks}
            isRemoval={true} 
            onRemove={props.onRemove} />
        <button className={styles.saveButton} onClick={props.onSave}>Save to Spotify</button>
        </div>
    )
}

export default Playlist