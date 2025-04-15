import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenresContext } from '../context/GenresContext';
import { usePlatformsContext } from '../context/PlatformsContext';

function FilterBar() {

    const {genres} = useGenresContext();
    const {platforms} = usePlatformsContext();

    const navigate = useNavigate();
    const [selectedGenre, setSelectedGenre] = useState("");
    const [selectedPlatform, setSelectedPlatform] = useState("");
    const [searchValue, setSearchValue] = useState("");


    const handleGenreChange = (e) => {
        const value = e.target.value;
        setSelectedGenre(value);
        setSelectedPlatform(""); // reset platform
        setSearchValue("");
        navigate(`/genres/${value}/games`);
    };

    const handlePlatformChange = (e) => {
        const value = e.target.value;
        setSelectedPlatform(value);
        setSelectedGenre(""); // reset genre
        setSearchValue("");
        navigate(`/platforms/${value}/games`);
    };

    function handleForm(e){
        e.preventDefault();
        setSelectedGenre(""); // reset genre
        setSelectedPlatform(""); // reset platform
        navigate(`/games?title=${searchValue}`);
    }

    return (
    <div className="g-3 mb-3 row row-cols-1 row-cols-sm-3">
            
      <div className="form-group col">
        <select
          name="genreFilter"
          id="genreFilter"
          className="form-select"
          value={selectedGenre}
          onChange={handleGenreChange}
        >
          <option disabled={true} value="">Seleziona un genere</option>
          {genres.map((genre, i) => (
            <option key={i} value={genre.id}>{genre.name}</option>
          ))}
        </select>
      </div>

      <div className="form-group col">
        <select
          name="platformFilter"
          id="platformFilter"
          className="form-select"
          value={selectedPlatform}
          onChange={handlePlatformChange}
        >
          <option disabled={true} value="">Seleziona una piattaforma</option>
          {platforms.map((platform, i) => (
            <option key={i} value={platform.id}>{platform.name}</option>
          ))}
        </select>
      </div>

      <div className="form-group col">
          <form className="form-inline d-flex gap-2" onSubmit={handleForm}>
              <input 
                className="form-control bg-secondary text-light border-0" 
                type="search" 
                placeholder="Search" 
                value={searchValue} 
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button className='btn btn-outline-light' type="submit">Cerca</button>
          </form> 
      </div>

    </div>
  );
}

export default FilterBar;
