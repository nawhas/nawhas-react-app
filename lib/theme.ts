import { useColorScheme } from './useColorScheme';

// Theme presets for light and dark mode
export const themePresets = {
  // Backgrounds
  primary: {
    light: 'bg-white',
    dark: 'bg-zinc-900',
  },
  secondary: {
    light: 'bg-gray-100',
    dark: 'bg-zinc-800',
  },
  accent: {
    light: 'bg-blue-500',
    dark: 'bg-blue-600',
  },
  inactive: {
    light: 'bg-gray-200',
    dark: 'bg-zinc-800',
  },

  // Text colors
  text: {
    light: 'text-gray-900',
    dark: 'text-white',
  },
  textMuted: {
    light: 'text-gray-700',
    dark: 'text-gray-300',
  },
  textSubtle: {
    light: 'text-gray-500',
    dark: 'text-gray-400',
  },

  // Borders
  border: {
    light: 'border-gray-200',
    dark: 'border-zinc-800',
  },
};

// Hook to get theme classes based on current color scheme
export function useThemeClass() {
  const { isDarkColorScheme } = useColorScheme();
  
  const getThemeClass = (type: keyof typeof themePresets) => {
    return isDarkColorScheme 
      ? themePresets[type].dark 
      : themePresets[type].light;
  };

  return { getThemeClass };
}

// Helper for conditionally applying theme classes
export const themed = (
  key: keyof typeof themePresets, 
  isDark: boolean
): string => {
  return isDark ? themePresets[key].dark : themePresets[key].light;
}; 