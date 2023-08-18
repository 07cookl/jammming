import React, { useState, useEffect } from 'react';
// import styles from './styles/SearchBar.module.css';

function SearchBar() {

    const [search, setSearch] = useState('');

    const submitHandler = (e) => {
        e.preventDefault;
    }

    return (
        <>
        <form className="{styles.input-group}" onSubmit={submitHandler}>
            <input onChange={({target}) => setSearch(target.value)} value={search} type="text" className="{styles.input}" id="search" name="search" placeholder="Search for a song or an artist..." />
            <input className="{styles.button--submit}" value="Search" type="submit" />
        </form>
        </>
    )
}

export default SearchBar;