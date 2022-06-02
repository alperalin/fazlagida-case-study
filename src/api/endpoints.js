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
function getTopAlbums(artistId) {
  return api.get('', {
    params: {
      method: 'artist.gettopalbums',
      mbid: artistId,
    },
  });
}

// Get top tracks of an artist
function getTopTracks(artistId) {
  return api.get('', {
    params: {
      method: 'artist.gettoptracks',
      mbid: artistId,
    },
  });
}

export { getTopArtists, getTopAlbums, getTopTracks };
