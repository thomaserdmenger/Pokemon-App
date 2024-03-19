import { Link } from "react-router-dom";
import "./Card.css";
import { useEffect, useState } from "react";

export const Card = (props) => {
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    fetch(props.imgURL)
      .then((res) => res.json())
      .then((apiData) => setPokemonData(apiData))
      .catch((error) => console.error("Error in Card.jsx fetch", error));
  }, [props.imgURL]);

  return (
    <>
      {pokemonData ? (
        <article className="card__container">
          <Link className="card" to={`/pokemon/${pokemonData.id}`}>
            <img
              className="card__image"
              src={pokemonData?.sprites?.other?.home?.front_default}
              alt="Pokemon"
            />
            <div className="card__details">
              <p>
                {pokemonData?.id < 10
                  ? `#00${pokemonData?.id}`
                  : pokemonData?.id < 100
                  ? `#0${pokemonData?.id}`
                  : `#${pokemonData?.id}`}
              </p>
              <p className="card__details__title">{pokemonData?.name}</p>
            </div>
          </Link>
        </article>
      ) : (
        <p>loading</p>
      )}
    </>
  );
};
