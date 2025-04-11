import { useNavigate } from "react-router-dom"

export default function GameCard({game}){

    const navigate = useNavigate();

    return(
        <>
        <div className="col" onClick={() => navigate(`/games/${game.id}`)}>
            <div className="card bg-secondary text-light h-100 shadow-sm">
              <img
                src={game.photoUrl || "https://placehold.co/200"}
                className="card-img-top"
                alt={game.title}
              />
              <div className="card-body">
                <h5 className="card-title">{game.title}</h5>
                <p className="card-text small">{game.description}</p>
              </div>
              <div className="card-footer d-flex align-items-center flex-wrap gap-1">
                <span>Generi:</span>
                {game.genres?.map((genre, i) => (
                  <span key={i} className="badge bg-success">{genre.name}</span>
                ))}
              </div>
              <div className="card-footer d-flex align-items-center flex-wrap gap-1">
                <span>Piattaforme: </span>
                {game.platforms?.map((platform, i) => (
                    <span key={i} className="badge bg-success">{platform.name}</span>
                    ))}
              </div>
            </div>
          </div>
        </>
    )

}