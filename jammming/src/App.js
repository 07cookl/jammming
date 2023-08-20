import React from 'react';
import SearchBar from './files/containers/SearchBar.js';
import SearchResults from './files/containers/SearchResults.js';
import Playlist from './files/containers/Playlist.js';
import logo from './files/Designs/Logo.png';

function App() {
  return (
    <>
      <div>
        <img className="logo" alt="Logo" src={logo} />
      </div>
      <SearchBar />
      <SearchResults />
      <Playlist />
    </>
  );
}

export default App;