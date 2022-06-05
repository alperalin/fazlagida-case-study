import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

export default {
  title: 'Components/ErrorMessage',
  component: ErrorMessage,
};

const Template = (args) => <ErrorMessage {...args} />;

export const Default = Template.bind({});

Default.args = {
  message: '400 Error',
};
