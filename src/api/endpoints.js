// API
import api from './instance';

// Get top artists
function getTopArtists(pageNumber) {
  return api.get('', {
    params: {
      method: 'chart.gettopartists',
      page: pageNumber,
    },
  });
}

// Get top albums of an artist
function getTopAlbums(artist, pageNumber) {
  return api.get('', {
    params: {
      method: 'artist.gettopalbums',
      artist: artist.toLowerCase(),
      page: pageNumber,
    },
  });
}

// Get top tracks of an artist
function getTopTracks(artist, pageNumber) {
  return api.get('', {
    params: {
      method: 'artist.gettoptracks',
      artist: artist.toLowerCase(),
      page: pageNumber,
    },
  });
}

export { getTopArtists, getTopAlbums, getTopTracks };
