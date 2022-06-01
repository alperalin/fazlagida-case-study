// API
import api from '../base';

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

export default getTopTracks;
