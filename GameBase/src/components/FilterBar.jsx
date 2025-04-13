import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenresContext } from '../context/GenresContext';
import { usePlatformsContext } from '../context/PlatformsContext';

function FilterBar() {

    const {genres} = useGenresContext();
    const {platforms} = usePlatformsContext();

    const navigate = useNavigate();
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedPlatform, setSelectedPlatform] = useState('');

    const handleGenreChange = (e) => {
        const value = e.target.value;
        setSelectedGenre(value);
        setSelectedPlatform(''); // reset piattaforma
        navigate(`/genres/${value}/games`);
    };

    const handlePlatformChange = (e) => {
        const value = e.target.value;
        setSelectedPlatform(value);
        setSelectedGenre(''); // reset genere
        navigate(`/platforms/${value}/games`);
    };

    const [searchValue, setSearchValue] = useState("");
    // const navigate = useNavigate();

    function handleForm(e){
        e.preventDefault();
        navigate(`/games?title=${searchValue}`);
    }

    return (
    <div className="d-flex gap-3 mb-3 align-items-center">
      
      <div className="form-group">
          <form className="form-inline d-flex" onSubmit={handleForm}>
              <input className="form-control bg-secondary text-light border-0" type="search" placeholder="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
              <button type="submit">Cerca</button>
          </form> 
      </div>
      
      <div className="form-group">
        <select
          name="genreFilter"
          id="genreFilter"
          className="form-select"
          value={selectedGenre}
          onChange={handleGenreChange}
        >
          <option value="">Seleziona un genere</option>
          {genres.map((genre, i) => (
            <option key={i} value={genre.id}>{genre.name}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <select
          name="platformFilter"
          id="platformFilter"
          className="form-select"
          value={selectedPlatform}
          onChange={handlePlatformChange}
        >
          <option value="">Seleziona una piattaforma</option>
          {platforms.map((platform, i) => (
            <option key={i} value={platform.id}>{platform.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
