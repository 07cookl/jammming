import React from 'react';
import SearchBar from './files/containers/SearchBar';
import SearchResults from './files/containers/SearchResults';
import Playlist from './files/containers/Playlist';

function App() {
  return (
    <>
      <div>
        <img className="logo" src="./files/Designs/Logo.png" />
      </div>
      <SearchBar />
      <SearchResults />
      <Playlist />
    </>
  );
}

export default App;