import Image from '../components/Image/Image';

export default {
  title: 'Components/Image',
  component: Image,
};

const Template = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
  alt: 'Placeholder Image',
  size: 'small',
};
