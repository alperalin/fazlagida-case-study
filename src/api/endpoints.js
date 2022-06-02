// API
import api from './instance';

// Get top artists
function getTopArtists(pageParam = 1) {
  return api.get('', {
    params: {
      method: 'chart.gettopartists',
      page: pageParam,
    },
  });
}

// Get top albums of an artist
function getTopAlbums(artistName) {
  return api.get('', {
    params: {
      method: 'artist.gettopalbums',
      artist: artistName,
    },
  });
}

// Get top tracks of an artist
function getTopTracks(artistName) {
  return api.get('', {
    params: {
      method: 'artist.gettoptracks',
      artist: artistName,
    },
  });
}

export { getTopArtists, getTopAlbums, getTopTracks };
