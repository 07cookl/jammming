import React, { useState , useCallback } from 'react';
import SearchBar from './files/containers/SearchBar.js';
import SearchResults from './files/containers/SearchResults.js';
import Playlist from './files/containers/Playlist.js';
import logo from './files/Designs/Logo.png';
import styles from './App.module.css';
import Spotify from './util/Spotify.js'

function App() {
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback((track) => {
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) 
      return;

    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },[playlistTracks]
    );

  const onRemove = useCallback((track) => {
    setPlaylistTracks((prevTracks) => prevTracks.filter((currentTrack) => (currentTrack.id !== track.id)));
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track => track.uri));
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    }, [playlistName, playlistTracks]);
  });

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.logoDiv}>
        <img className={styles.logo} alt="Logo" src={logo} />
      </div>
      <SearchBar onSearch={search} />
      <div className={styles.lists}>
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <Playlist 
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onNameChange={updatePlaylistName}
          onRemove={onRemove} 
          onSave={savePlaylist}
          />
      </div>
    </div>
  );
}

export default App;