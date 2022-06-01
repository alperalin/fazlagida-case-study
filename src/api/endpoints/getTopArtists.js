// API
import api from '../base';

// Get top artists
function getTopArtists(pageNumber) {
  return api.get('', {
    params: {
      method: 'chart.gettopartists',
      page: pageNumber,
    },
  });
}

export default getTopArtists;
