// Imports
import { useEffect, Fragment } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { uniqWith, isEqual } from 'lodash';

//Components
import List from '../List/List';
import ArtistCard from '../ArtistCard/ArtistCard';
import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

// API
import { getTopArtists } from '../../api/endpoints';

// Page
function Home() {
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

  // When user scroll to end of page
  // New artists content will fetch
  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  // Return
  if (status === 'loading') return <Spinner />;

  // Error
  if (status === 'error') return <ErrorMessage message={error.message} />;

  return (
    <>
      <div className="col-md-2"></div>
      <div className="home col-md-8 col-xs-12">
        <List title="Top Artists List">
          {data?.pages.map((artist, i) => (
            <Fragment key={i}>
              <ArtistCard
                key={artist.mbid}
                id={artist.mbid}
                image={artist?.image}
                artistName={artist.name}
                listenersCount={parseInt(artist.listeners)}
                playCount={parseInt(artist.playcount)}
              />
            </Fragment>
          ))}
        </List>
        <Button
          ref={ref}
          variant="contained"
          alignCenter={true}
          isLoading={isFetchingNextPage}
          onClick={fetchNextPage}
        >
          {hasNextPage ? 'Load More Artists' : 'Nothing to show'}
        </Button>
      </div>
      <div className="col-md-2"></div>
    </>
  );
}

export default Home;
