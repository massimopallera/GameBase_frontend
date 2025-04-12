import { createContext, useContext, useEffect, useState } from 'react';

export const GamesContext = createContext();

export const GamesProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {

    const url = `${import.meta.env.VITE_REST}/games`
    console.log(url);
    
    
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setGames(data);
      });
  }, []);

  return (
    <GamesContext.Provider value={{ games }}>
      {children}
    </GamesContext.Provider>
  );
};

export function useGamesContext(){
    return useContext(GamesContext);
}