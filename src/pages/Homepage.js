// Imports
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { uniqWith, isEqual } from 'lodash';

//Components
import List from '../components/List/List';
import ArtistCard from '../components/ArtistCard/ArtistCard';

// API
import { getTopArtists } from '../api/endpoints';
import { useEffect, Fragment } from 'react';

// Page
function Homepage() {
  // Inview
  const { ref, inView } = useInView({
    trackVisibility: true,
    delay: 500,
  });

  // Query
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    'topArtists',
    ({ pageParam = 1 }) => getTopArtists(pageParam).then((res) => res.data),
    {
      select: (data) => ({
        pages: [
          ...uniqWith(
            data.pages.map((item) => item['artists']['artist']).flat(),
            isEqual
          ),
        ],
      }),
      getNextPageParam: (lastPage, pages) => {
        let page = parseInt(lastPage.artists['@attr'].page);
        const totalPage = parseInt(lastPage.artists['@attr'].totalPages);

        if (page < totalPage) return ++page;

        return undefined;
      },
    }
  );

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  // Return
  if (status === 'loading') return <span>Loading...</span>;

  if (status === 'error')
    return <span>{`An error has occurred: ${error.message}`}</span>;

  return (
    <>
      <List title="Top Artists List">
        {data?.pages.map((artist, i) => (
          <Fragment key={i}>
            <ArtistCard
              key={artist.mbid}
              id={artist.mbid}
              imageSrc={artist?.image[1]['#text']}
              imageSize="small"
              artistName={artist.name}
              listeners={artist.listeners}
              playCount={artist.playcount}
            />
          </Fragment>
        ))}
      </List>
      <button
        ref={ref}
        onClick={() => fetchNextPage()}
        style={{ padding: 15, margin: '15px auto 0 auto' }}
      >
        {isFetchingNextPage
          ? 'Loading More...'
          : hasNextPage
          ? 'Load Newer'
          : 'Nothing to show'}
      </button>
    </>
  );
}

export default Homepage;
