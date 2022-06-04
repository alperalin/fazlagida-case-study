import Button from '../components/Button/Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained',
  children: 'Press Me',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  children: 'Press Me',
};

export const Centered = Template.bind({});
Centered.args = {
  variant: 'contained',
  alignCenter: true,
  children: 'Press Me',
};

export const Loading = Template.bind({});
Loading.args = {
  variant: 'contained',
  isLoading: true,
  children: 'Press Me',
};
