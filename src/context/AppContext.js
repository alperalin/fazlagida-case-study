// Import
import { createContext, useContext, useState, useMemo } from 'react';

// Initial State
const initialState = {
  theme: 'light',
  currentArtist: {},
};

// Initial Values
const initialValues = {
  dispatches: {},
  provided: false,
  state: initialState,
};

// Context
const AppContext = createContext(initialValues);

// Context Provider
function AppContextProvider({ children }) {
  const [state, setState] = useState(initialState);

  const dispatches = useMemo(
    () => ({
      setTheme() {
        setState((prev) => ({
          ...prev,
          theme: prev.theme === 'light' ? 'dark' : 'light',
        }));
      },
      setCurrentArtist(artistInfo) {
        setState((prev) => ({ ...prev, currentArtist: artistInfo }));
      },
    }),
    []
  );

  return (
    <AppContext.Provider value={{ dispatches, provided: true, state }}>
      {children}
    </AppContext.Provider>
  );
}

// Use Context
function useAppContext() {
  const { dispatches, provided, state } = useContext(AppContext);

  if (!provided) {
    throw new Error(
      'Error, useAppContext must be within The AppContextProvider'
    );
  }

  return { dispatches, provided, state };
}

export { AppContext, AppContextProvider, useAppContext };
