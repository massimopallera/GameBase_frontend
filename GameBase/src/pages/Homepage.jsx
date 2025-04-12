import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import { useGamesContext } from "../context/GamesContext";

export default function Homepage() {

  const {games} = useGamesContext();

  return (
    <div className="container">
      <h1 className="mb-4 text-center">Games</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {games.map(game => (
          <GameCard key={game.id} game={game}/>
        ))}
      </div>
    </div>
  );
}
