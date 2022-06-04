import Logo from '../components/Logo/Logo';

export default {
  title: 'Components/Logo',
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Music App',
};
