import ArtistBanner from '../components/ArtistBanner/ArtistBanner';

export default {
  title: 'Components/ArtistBanner',
  component: ArtistBanner,
};

const Template = (args) => <ArtistBanner {...args} />;

export const Default = Template.bind({});

Default.args = {
  imageSrc:
    'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
  artistName: 'Metallica',
};
