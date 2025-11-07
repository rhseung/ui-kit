import React, { createContext, useContext, useEffect, useState } from 'react';

import { type HueName, type Theme, hueNames } from '@/styles/colors';

const STORAGE_KEYS = {
  theme: 'ui-kit-theme',
  accent: 'ui-kit-accent',
} as const;

type ThemeWithSystem = Theme | 'system';

interface ThemeContextValue {
  theme: ThemeWithSystem;
  resolvedTheme: Theme;
  accent: HueName;
  setTheme: (theme: Theme) => void;
  setAccent: (color: HueName) => void;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultAccent?: HueName;
  themeStorageKey?: string;
  accentStorageKey?: string;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const isBrowser = () => typeof window !== 'undefined';

const storage = {
  get: (key: string): string | null => {
    if (!isBrowser()) return null;
    return localStorage.getItem(key);
  },
  set: (key: string, value: string): void => {
    if (!isBrowser()) return;
    localStorage.setItem(key, value);
  },
  remove: (key: string): void => {
    if (!isBrowser()) return;
    localStorage.removeItem(key);
  },
};

const getSystemTheme = (): Theme => {
  if (!isBrowser()) return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const isValidTheme = (value: string): value is Theme => {
  return value === 'light' || value === 'dark';
};

const isValidColor = (value: string): value is HueName => {
  return hueNames.includes(value as HueName);
};

const getStoredTheme = (storageKey: string): Theme | null => {
  const stored = storage.get(storageKey);
  return stored && isValidTheme(stored) ? stored : null;
};

const getStoredAccent = (storageKey: string): HueName | null => {
  const stored = storage.get(storageKey);
  return stored && isValidColor(stored) ? stored : null;
};

const getResolvedTheme = (theme: ThemeWithSystem): Theme => {
  return theme === 'system' ? getSystemTheme() : theme;
};

const applyToDOM = (resolvedTheme: Theme, accent: HueName): void => {
  if (!isBrowser()) return;
  document.documentElement.setAttribute('data-theme', resolvedTheme);
  document.documentElement.setAttribute('data-accent', accent);
};

export function ThemeProvider({
  children,
  defaultTheme,
  defaultAccent = 'blue',
  themeStorageKey = STORAGE_KEYS.theme,
  accentStorageKey = STORAGE_KEYS.accent,
}: ThemeProviderProps) {
  const initialTheme =
    getStoredTheme(themeStorageKey) ?? defaultTheme ?? 'system';
  const initialResolvedTheme = getResolvedTheme(initialTheme);
  const initialAccent = getStoredAccent(accentStorageKey) ?? defaultAccent;

  if (isBrowser()) {
    applyToDOM(initialResolvedTheme, initialAccent);
  }

  const [theme, setThemeState] = useState<ThemeWithSystem>(initialTheme);
  const [resolvedTheme, setResolvedTheme] =
    useState<Theme>(initialResolvedTheme);
  const [accent, setAccentState] = useState<HueName>(initialAccent);

  const updateResolvedTheme = (newTheme: ThemeWithSystem) => {
    const resolved = getResolvedTheme(newTheme);
    setResolvedTheme(resolved);
    applyToDOM(resolved, accent);
  };

  const setTheme = (newTheme: ThemeWithSystem) => {
    setThemeState(newTheme);
    storage.set(themeStorageKey, newTheme);
    updateResolvedTheme(newTheme);
  };

  const setAccent = (color: HueName) => {
    setAccentState(color);
    storage.set(accentStorageKey, color);
    applyToDOM(resolvedTheme, color);
  };

  const toggleTheme = () => {
    const themeCycle: ThemeWithSystem[] = ['light', 'dark', 'system'];
    const currentIndex = themeCycle.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeCycle.length;
    const nextTheme = themeCycle[nextIndex];
    setTheme(nextTheme);
  };

  useEffect(() => {
    updateResolvedTheme(theme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        const newResolved = e.matches ? 'dark' : 'light';
        setResolvedTheme(newResolved);
        applyToDOM(newResolved, accent);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () =>
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [theme, accent]);

  const value: ThemeContextValue = {
    theme,
    resolvedTheme,
    accent,
    setTheme,
    setAccent,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <div data-theme={theme} data-accent={accent}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
