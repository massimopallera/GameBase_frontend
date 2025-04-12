import { Link, useNavigate } from "react-router-dom";

import { useGenresContext } from "../context/GenresContext";
import { usePlatformsContext } from "../context/PlatformsContext";
import FilterBar from "../components/FilterBar";
import { useState } from "react";

export default function Header(){

    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    function handleForm(e){
        e.preventDefault();
        navigate(`/games?title=${searchValue}`);
        // const url= `${import.meta.env.VITE_REST}/games?title=${searchValue}`
        // console.log(url);


        

        // fetch(url)
        // .then(resp => resp.json())
        // .then(data => console.log(data))
    }

    return(
    <header>
        <nav className="navbar navbar-dark bg-dark px-4 py-2">
            <span className="navbar-brand mb-0 h1">GameBase</span>

            <form className="form-inline" onSubmit={handleForm}>
                <input className="form-control bg-secondary text-light border-0" type="search" placeholder="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                <button type="submit">Cerca</button>
            </form> 

            <FilterBar />

        </nav>
    </header>   
    )
}