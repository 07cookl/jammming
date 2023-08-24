const Spotify = {
  async search(term) {
    const url = `https://spotify23.p.rapidapi.com/search/?q=${term}&type=multi&offset=0&limit=10&numberOfTopResults=5`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '328abf0619mshdd593e09bcb1465p17cb8fjsnd68879cd67d5',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };

    const response = await fetch(url, options);
    const jsonResponse = await response.json();

    return jsonResponse.tracks.items?.map(track => ({
      id: track.data.id,
      name: track.data.name,
      artist: track.data.artists.items[0].name,
      album: track.data.albumOfTrack.name,
      artwork: track.data.albumOfTrack.coverArt.sources[0].url,
      duration: track.data.duration,
      uri: track.data.uri
    }));
},

savePlaylist(name, trackUris) {
  if (!name || !trackUris.length) {
    return;
  }
}
};
console.log(Spotify.search('sandstorm'));
export default Spotify;