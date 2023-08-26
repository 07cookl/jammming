import React from 'react';
import styles from './styles/SearchResults.module.css';
import Tracklist from './Tracklist.js';

function SearchResults (props) {
    const length = Object.keys(props.searchResults).length;
    return (
        <div>
            <div className={styles.header}>
                <h2 className={styles.title}>Results</h2>
                <p className={styles.jams}>{length == 0 ? "" : `${length} Jams Found`}</p>
            </div>
            <Tracklist tracks={props.searchResults} onAdd={props.onAdd} />
        </div>
    )
}

export default SearchResults