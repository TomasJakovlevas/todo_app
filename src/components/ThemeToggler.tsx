import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import MoonIcon from '@/icons/moon/moonIcon';
import SunIcon from '@/icons/sun/sunIcon';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      className={`w-fit rounded-md flex items-center h-full`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeToggler;
