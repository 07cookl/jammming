import React from 'react';
// import styles from './styles/Track.module.css';

function Track ({tracks}) {
    return (
        <>
        <div>
            <img src="{tracks.images.url}" />
            <ul className="songData">
                <li className="songTitle">{tracks.name}</li>
                <li className="artistName">{tracks.artist}</li>
                <li className="albumName">{tracks.album}</li>
            </ul>
        </div>
        </>
    )
}

export default Track