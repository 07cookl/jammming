import React from 'react';
import SearchBar from './files/containers/SearchBar.js';
import SearchResults from './files/containers/SearchResults.js';
import Playlist from './files/containers/Playlist.js';
import logo from './files/Designs/Logo.png';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.logoDiv}>
        <img className={styles.logo} alt="Logo" src={logo} />
      </div>
      <SearchBar className={styles.searchBar} />
      <div className={styles.lists}>
        <SearchResults className={styles.searchResults} />
        <Playlist className={styles.playlist} />
      </div>
    </div>
  );
}

export default App;