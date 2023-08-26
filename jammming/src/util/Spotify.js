const clientId = '908ee3477a9c470ca898f450dd70b945';
const redirectUri = 'http://localhost:3000/';
let accessToken;

const Spotify = {
  async search(term) {
    const url = `https://spotify23.p.rapidapi.com/search/?q=${term}&type=multi&offset=0&limit=24&numberOfTopResults=5`;
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
      artist: track.data.artists.items[0].profile.name,
      album: track.data.albumOfTrack.name,
      artwork: track.data.albumOfTrack.coverArt.sources[0].url,
      duration: track.data.duration.totalMilliseconds,
      uri: track.data.uri
    }));
},

getAccessToken() {
  if (accessToken) {
    return accessToken;
  }

  const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
  const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
  if (accessTokenMatch && expiresInMatch) {
    accessToken = accessTokenMatch[1];
    const expiresIn = Number(expiresInMatch[1]);
    window.setTimeout(() => accessToken = '', expiresIn * 1000);
    window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
    return accessToken;
  } else {
    const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
    window.location = accessUrl;
  }
},

savePlaylist(name, trackUris) {
  if (!name || !trackUris.length) {
    return;
  }

  const accessToken = Spotify.getAccessToken();
  const headers = { Authorization: `Bearer ${accessToken}` };
  let userId;

  return fetch('https://api.spotify.com/v1/me', {headers: headers}
  ).then(response => response.json()
  ).then(jsonResponse => {
    userId = jsonResponse.id;
    return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
      headers: headers,
      method: 'POST',
      body: JSON.stringify({name: name})
    }).then(response => response.json()
    ).then(jsonResponse => {
      const playlistId = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({uris: trackUris})
      });
    });
  });
}
};
Spotify.search('sandstorm');


export default Spotify;