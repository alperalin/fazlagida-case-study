import Footer from '../components/Footer/Footer';

import './footer.css';

export default {
  title: 'Components/Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: '@2022 Made by Alper ALIN',
};
