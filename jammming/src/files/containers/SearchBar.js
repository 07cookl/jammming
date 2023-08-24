import React, { useState, useEffect, useCallback } from 'react';
import styles from './SearchBar.module.css';

function SearchBar(props) {

    const [term, setTerm] = useState('');

    const handleSubmit = useCallback(() => {
        props.onSearch(term);
    }, [props.onSearch, term])

    return (
        <>
        <div className={styles.inputGroup}>
            <input onChange={({target}) => setTerm(target.value)} value={term} className={styles.input} id="search" placeholder="Search for a song or an artist..." />
            <button className={styles.buttonSubmit} onClick={handleSubmit}>Search</button>
        </div>
        </>
    )
}

export default SearchBar;