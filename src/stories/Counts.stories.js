import Counts from '../components/Counts/Counts';

export default {
  title: 'Components/Counts',
  component: Counts,
};

const Template = (args) => <Counts {...args} />;

export const Default = Template.bind({});

Default.args = {
  type: 'listeners',
  count: 2000000,
};
