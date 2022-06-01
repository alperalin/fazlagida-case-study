// API
import api from '../base';

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

export default getTopAlbums;
