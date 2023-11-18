'use client';

import { Switch } from '@nextui-org/switch';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { PiMoonFill, PiSunFill } from 'react-icons/pi';
import Text from '../../primitives/Text.jsx';

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex flex-row justify-between items-center w-full h-min">
      <Text tag="h4" text="Оформление" />
      <Switch
        defaultSelected={theme === 'dark'}
        size="lg"
        color="success"
        startContent={<PiSunFill color="rgb(7, 71, 4)" />}
        endContent={<PiMoonFill />}
        onChange={toggleTheme}
      />
    </div>
  );
}

export default ThemeSwitcher;
