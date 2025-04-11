import { createContext, useContext, useEffect, useState } from 'react';

export const GenresContext = createContext();

export const GenresProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {

    const url = `${import.meta.env.VITE_REST}/genres`
    
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setGenres(data);
      });
  }, []);

  return (
    <GenresContext.Provider value={{ genres }}>
      {children}
    </GenresContext.Provider>
  );
};

export function useGenresContext(){
    return useContext(GenresContext);
}