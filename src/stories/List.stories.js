import List from '../components/List/List';
import MediaCard from '../components/MediaCard/MediaCard';

export default {
  title: 'Components/List',
  component: List,
};

const Template = (args) => (
  <div className="col-md-6 col-md-offset-3">
    <List {...args} />
  </div>
);

export const Default = Template.bind({});

const mediaArgs = {
  image: [
    {
      '#text':
        'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
      size: 'small',
    },
    {
      '#text':
        'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
      size: 'medium',
    },
    {
      '#text':
        'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
      size: 'large',
    },
    {
      '#text':
        'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
      size: 'extralarge',
    },
  ],
  mediaName: 'One',
  artistName: 'Metallica',
  listenersCount: 2000,
  playCount: 1000,
};

Default.args = {
  title: 'Artists List',
  children: [
    <MediaCard {...mediaArgs} />,
    <MediaCard {...mediaArgs} />,
    <MediaCard {...mediaArgs} />,
    <MediaCard {...mediaArgs} />,
    <MediaCard {...mediaArgs} />,
  ],
};
