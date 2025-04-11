import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Stars from "./Stars";

function GameDetail() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_REST}/games/${id}`)
      .then(res => res.json())
      .then(data => {
        setGame(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Errore nel fetch:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center text-light mt-5">Caricamento...</p>;
  if (!game) return <p className="text-center text-danger mt-5">Gioco non trovato</p>;

  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column">
      <div
        className="w-100"
        style={{
          backgroundImage: `url(${game.photoUrl || "https://placehold.co/1600x600"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          position: "relative",
        }}
      >
        <div className="position-absolute top-0 start-0 p-3">
          <Link to="/" className="btn btn-outline-light">&larr; Home</Link>
        </div>
        <div
          className="position-absolute bottom-0 start-0 p-4 bg-dark bg-opacity-50 w-100"
          style={{ backdropFilter: "blur(4px)" }}
        >
          <h1 className="display-3 fw-bold">{game.title}</h1>
        </div>
      </div>

      <div className="container py-5 flex-grow-1">
        <div className="row">
          <div className="col-lg-8">
            <p className="lead">{game.description}</p>

            <div className="mb-4">
              <h5>Generi:</h5>
              {game.genres?.map(g => (
                <span key={g.genre_id} className="badge bg-success me-2 mb-1">{g.name}</span>
              ))}
            </div>

            <div className="mb-4">
              <h5>Piattaforme:</h5>
              {game.platforms?.map(p => (
                <span key={p.platform_id} className="badge bg-info text-dark me-2 mb-1">{p.name}</span>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="bg-secondary p-3 rounded">
              <h5>Altre info</h5>
              <div className="mb-1 d-flex gap-2"><strong>Rating:</strong> <Stars rating={game.rating}></Stars>

               </div>
              {/* aggiungi qui altri dettagli se ne hai */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameDetail;
