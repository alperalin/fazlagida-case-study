import { useState } from 'react';
import ThemeButton from '../components/ThemeButton/ThemeButton';

export default {
  title: 'Components/ThemeButton',
  component: ThemeButton,
};

export const Button = () => {
  const [theme, setTheme] = useState('light');

  function handleClick() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  return <ThemeButton theme={theme} onClick={handleClick} />;
};
