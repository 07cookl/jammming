import React, { useState, useCallback } from 'react';
import styles from './styles/SearchBar.module.css';

function SearchBar(props) {

    const [term, setTerm] = useState('');

    const handleSubmit = useCallback(() => {
        props.onSearch(term);
    }, [props.onSearch, term])

    return (
        <div className={styles.inputGroup}>
            <button className={styles.buttonSubmit} id="button" onClick={handleSubmit}></button>
            <input 
                onChange={({target}) => setTerm(target.value)} 
                value={term} 
                className={styles.input} 
                id="search" 
                placeholder="Search for a jam..." 
                onKeyDown={(e) => e.key === "Enter" ? document.getElementById("button").click() : ''} 
            />
        </div>
    )
}

export default SearchBar;