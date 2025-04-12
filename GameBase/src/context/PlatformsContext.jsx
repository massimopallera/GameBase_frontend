import { createContext, useContext, useEffect, useState } from 'react';

export const PlatformsContext = createContext();

export const PlatformsProvider = ({ children }) => {
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {

    const url = `${import.meta.env.VITE_REST}/platforms`
    
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPlatforms(data);
      });
  }, []);

  return (
    <PlatformsContext.Provider value={{ platforms }}>
      {children}
    </PlatformsContext.Provider>
  );
};

export function usePlatformsContext(){
    return useContext(PlatformsContext);
}