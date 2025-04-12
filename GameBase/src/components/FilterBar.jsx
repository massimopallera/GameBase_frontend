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

    return (
    <div className="d-flex gap-3 mb-3">
      <div className="form-group">
        <label htmlFor="genreFilter" className="form-label">Filtro per Genere</label>
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
        <label htmlFor="platformFilter" className="form-label">Filtro per Piattaforma</label>
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
