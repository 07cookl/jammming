import React from 'react';
import styles from './styles/Track.module.css';

function Track (props) {
    console.log(props.trackObject.images.url);
    return (
        <div>
            <img src={props.trackObject.images.url} alt="Album Image" />
            <ul className="songData">
                <li className="songTitle">{props.trackObject.name}</li>
                <li className="artistName">{props.trackObject.artist}</li>
                <li className="albumName">{props.trackObject.album}</li>
            </ul>
        </div>
    )
};

export default Track;