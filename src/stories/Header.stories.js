import Header from '../components/Header/Header';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: { onSetTheme: { action: 'onClick' } },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  theme: 'light',
};
