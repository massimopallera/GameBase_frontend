import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"
import GameCard from "../components/GameCard";

export default function Filtered(){
    
    // const {path,id} = useParams();

    // const [filteredData, setFilteredData] = useState();

    // useEffect(
    //     () => {
    //         const url = `${import.meta.env.VITE_REST}/${path}/${id}/games`
    //         // const url = `${import.meta.env.VITE_REST}/games?title=${title}`
    //         // console.log(url);

    //         fetch(url)
    //         .then(resp => resp.json())
    //         .then(data => setFilteredData(data))
    //     }
    //     ,[id, path])

    const { path, id } = useParams(); 
    const location = useLocation(); 
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        let url = '';

        if (path && id) {
            // ricerca per genere o piattaforma
            url = `${import.meta.env.VITE_REST}/${path}/${id}/games`;
        } else if (location.search) {
            // ricerca per titolo o altre query
            url = `${import.meta.env.VITE_REST}/games${location.search}`;
        } else {
            // fallback: tutti i giochi?
            url = `${import.meta.env.VITE_REST}/games`;
        }

        fetch(url)
            .then(resp => resp.json())// per /genres/:id/games o /platforms/:id/games
            .then(data => setFilteredData(data))
            .catch(err => console.error('Errore nel fetch:', err));

    }, [path, id, location.search]);

    return(
        <>

            <div className="container">
                <h1 className="mb-4 text-center">GAMES</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                
                    {filteredData ? filteredData.map(data => <GameCard key={data.id} game={data}/>) : <h2>NOT FOUND</h2>}
                
                </div>
            </div>

        </>
    )
}