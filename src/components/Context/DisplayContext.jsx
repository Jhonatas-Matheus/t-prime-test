import { createContext, useState } from "react";

export const DisplayContext = createContext({});

export const DisplayContextProvider = ({ children }) => {
  const [display, setDisplay] = useState('contacts')
  return (
    <DisplayContext.Provider
      value={{
        display,
        setDisplay
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
};
