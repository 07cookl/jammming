import React from 'react';
import styles from './styles/SearchResults.module.css';
import Tracklist from './Tracklist.js';

function SearchResults (props) {
    return (
        <div>
            <h2>Search Results</h2>
            <Tracklist tracks={props.searchResults} onAdd={props.onAdd} />
        </div>
    )
}

export default SearchResults