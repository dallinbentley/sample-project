import { useCallback, useMemo } from 'react';
import useLocalStorage from './useLocalStorage';

type ThemeMode = 'dark' | 'mystic';

interface ThemeColors {
  bg: string;
  bgSecondary: string;
  text: string;
  textMuted: string;
  accent: string;
  accentSecondary: string;
  border: string;
}

const darkColors: ThemeColors = {
  bg: '#0a0a1a',
  bgSecondary: '#1a1a2e',
  text: '#e0d5c1',
  textMuted: '#8a8070',
  accent: '#d4a574',
  accentSecondary: '#4fc3f7',
  border: '#2a2a4e',
};

const mysticColors: ThemeColors = {
  bg: '#1a0a2e',
  bgSecondary: '#2a1a3e',
  text: '#e0d5c1',
  textMuted: '#9a88a0',
  accent: '#d4a574',
  accentSecondary: '#4fc3f7',
  border: '#3a2a5e',
};

function useTheme() {
  const [theme, setTheme] = useLocalStorage<ThemeMode>('wellze-theme', 'dark');

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'mystic' : 'dark'));
  }, [setTheme]);

  const isDark = theme === 'dark';

  const colors = useMemo<ThemeColors>(
    () => (isDark ? darkColors : mysticColors),
    [isDark],
  );

  return { theme, toggleTheme, isDark, colors };
}

export type { ThemeMode, ThemeColors };
export default useTheme;
