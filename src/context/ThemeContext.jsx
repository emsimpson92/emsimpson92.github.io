import { createContext } from 'react';
import { oasisTheme } from '../styles/theme';

export const ThemeContext = createContext(oasisTheme);

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={oasisTheme}>
      {children}
    </ThemeContext.Provider>
  );
}
